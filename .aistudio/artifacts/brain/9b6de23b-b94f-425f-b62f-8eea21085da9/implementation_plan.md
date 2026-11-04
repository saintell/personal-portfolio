# Plan de Integración: Línea de Tiempo Luminosa + Separación de Experiencia y Formación

## 1. Objetivo
Restaurar el efecto interactivo de la **línea de tiempo luminosa animada con GSAP (`ScrollTrigger`)** que ilumina progresivamente los nodos al hacer scroll y se conecta con el monograma **SP** en la sección de Contacto, manteniendo al mismo tiempo la **separación visual clara** entre **Experiencia Profesional** y **Formación Académica y Certificaciones**, así como las etiquetas de tecnologías por cada rol.

---

## 2. Diseño y Flujo Visual (`src/components/Experience.tsx` y `src/components/Contact.tsx`)

### A. Bloque 1: Experiencia Profesional (Línea de Tiempo Luminosa Alternada)
- **Encabezado de Subsección**: Nodo inicial e identificador visual de **Experiencia Profesional**.
- **Estructura Alternada (Izquierda / Derecha en Desktop, Lateral en Mobile)**:
  - Los 3 roles laborales (*PCA Ingeniería*, *AvanzaEmpleo - Freelance*, *Fundación BioDess*) se disponen de forma alternada a ambos lados del eje central luminoso.
  - Cada hito cuenta con su nodo circular (`.timeline-node-icon`) con icono `Briefcase` que se activa con la clase `.active-node` (borde acento, escala y resplandor verde `#00d287`) exactamente cuando la línea luminosa lo alcanza durante el scroll.
  - Dentro de cada `SpotlightCard` se conservan las mejoras de contenido: periodo, empresa, cargo, descripción optimizada y los **chips de tecnologías clave**.

### B. Bloque 2: Formación Académica y Certificaciones (Tarjetas Separadas con Continuidad de Línea)
- **Separación Clara**: Al finalizar los roles laborales, se presenta un nodo divisorio central con icono `GraduationCap` y el encabezado **Formación Académica y Certificaciones**.
- **Diseño en Tarjetas**: Los 3 elementos formativos (*Ingeniería en Sistemas*, *Certificaciones Destacadas - Platzi*, *Tecnología en Sistemas de Información - Univalle*) se muestran en una cuadrícula de **3 tarjetas simétricas** (`grid-cols-1 md:grid-cols-3`) con sus insignias y competencias clave.
- **Continuidad del Haz de Luz**: El eje luminoso continúa de forma fluida hasta el borde inferior de la sección `#experience` (`pb-0`) para empatar exactamente con el inicio de la sección `#contact`.

### C. Conexión con el Monograma SP en Contacto (`src/components/Contact.tsx`)
- **Desktop**: Línea vertical central (`left-1/2`) animada con `ScrollTrigger` que recibe el trazo desde `#experience` e ilumina el logo **SP** (`.logo-illuminated`) al tocar su borde superior.
- **Mobile**: Restauración de la curva SVG animada (`mobileCurveClip`) que conecta el eje lateral móvil con el centro del monograma **SP**, garantizando una transición continua en cualquier tamaño de pantalla.

---

## 3. Archivos a Modificar
- `/src/components/Experience.tsx`: Implementación del eje luminoso animado con GSAP `ScrollTrigger`, nodos interactivos `.active-node`, layout alternado para **Experiencia Profesional** y cuadrícula de tarjetas para **Formación Académica y Certificaciones** conectada al final de la sección.
- `/src/components/Contact.tsx`: Sincronización de la línea conectora superior (recta en desktop y curva SVG en mobile) e iluminación automática del logo **SP**.
