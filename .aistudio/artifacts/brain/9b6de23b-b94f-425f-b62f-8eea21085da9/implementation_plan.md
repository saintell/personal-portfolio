# Corrección de Colisión de Despliegues en GitHub Pages (Error HTTP 400)

Este plan resuelve el error `Failed to create deployment (status: 400) ... due to in progress deployment` en GitHub Actions mediante control de concurrencia automática, configuración del entorno oficial `github-pages` y separación de las etapas de construcción (`build`) y publicación (`deploy`).

---

## Revisión del Usuario y Decisiones Confirmadas

> [!IMPORTANT]
> **Decisiones confirmadas para el flujo de despliegue:**
> - **Cancelación Automática de Despliegues en Curso (`cancel-in-progress: true`)**: Cuando se realiza un nuevo *push*, cualquier despliegue anterior que siga en cola o en ejecución dentro del grupo `"pages"` será cancelado automáticamente para dar paso a la versión más reciente sin errores de colisión `HTTP 400`.
> - **Ramas de Producción (`main` / `master`)**: El despliegue automático se ejecutará únicamente al hacer *push* sobre las ramas principales (`main` o `master`) o manualmente mediante `workflow_dispatch`, evitando que commits intermedios en ramas de desarrollo disparen despliegues simultáneos que bloqueen la cola.

---

## 1. Diagnóstico del Error y Causa Raíz

- **Qué indica el error de la captura**:
  - `HttpError: Deployment request failed for 568d016... due to in progress deployment. Please cancel 77c6b58... first or wait for it to complete.`
  - GitHub Pages solo permite **un despliegue activo a la vez** por repositorio. Si se envían dos commits seguidos (o si un despliegue previo quedó colgado esperando recursos), el segundo intento choca contra el bloqueo del primero y la API de GitHub Pages rechaza la solicitud con `status: 400`.
- **Por qué ocurría en la configuración actual**:
  1. Faltaba el bloque `concurrency` con `group: "pages"` y `cancel-in-progress: true`.
  2. El paso de despliegue no declaraba el `environment: github-pages` requerido por `actions/deploy-pages@v4` para gestionar el ciclo de vida y las URLs de entorno.
  3. Ejecutar `build` y `deploy` en un único trabajo sin aislamiento de entorno impedía cancelar limpiamente un despliegue en espera cuando llegaba un nuevo commit.

---

## 2. Arquitectura del Flujo de CI/CD Optimizado

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   Evento: Push (main / master) o Manual                 │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│              Control de Concurrencia Global (group: "pages")            │
│   • Si existe una ejecución previa activa -> La cancela automáticamente │
│   • Garantiza que solo 1 versión compita por el entorno GitHub Pages    │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         Job 1: Build & Package                          │
│   1. Checkout del repositorio                                           │
│   2. Configuración de Node 20 con caché de dependencias npm             │
│   3. Instalación limpia (npm ci) y compilación de producción            │
│   4. Empaquetado y subida del artefacto estático para Pages             │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                  Job 2: Deploy (needs: build)                           │
│   • Entorno: github-pages (expone la URL pública resultante)            │
│   • Publicación atómica mediante actions/deploy-pages@v4                │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Decisiones Técnicas y Beneficios

- **Decisión 1: Grupo de Concurrencia `"pages"` con `cancel-in-progress: true`**
  - *Enfoque Elegido*: Declarar a nivel de flujo el grupo de concurrencia `"pages"` con cancelación inmediata de ejecuciones previas.
  - *Por Qué*: Elimina de raíz el conflicto `HTTP 400 due to in progress deployment` cuando se hacen varios cambios seguidos.

- **Decisión 2: Separación en Dos Jobs (`build` + `deploy`) con Caché de NPM**
  - *Enfoque Elegido*: Dividir la compilación y el despliegue en dos etapas encadenadas (`needs: build`) y activar `cache: 'npm'` en la configuración de Node.
  - *Por Qué*: Acelera el tiempo de construcción y sigue la arquitectura recomendada oficialmente por GitHub para `actions/deploy-pages@v4`.

- **Decisión 3: Limpieza de Capturas Temporales**
  - *Enfoque Elegido*: Eliminar del directorio público la imagen temporal adjuntada durante el diagnóstico para no incluir archivos innecesarios en el paquete de producción.

> [!NOTE]
> **Nota sobre el despliegue `77c6b58...` actualmente bloqueado en GitHub**:
> Si en la pestaña **Actions** de tu repositorio de GitHub aún aparece una ejecución antigua girando como *"In progress"*, cancélala manualmente una única vez desde el botón **Cancel workflow** en GitHub. A partir de este cambio, el nuevo bloque de concurrencia se encargará de cancelar automáticamente cualquier ejecución previa en futuros *pushes*.
