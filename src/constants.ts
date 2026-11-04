import {
  Code2,
  Server,
  Monitor,
  Wrench,
  Database
} from 'lucide-react';
import { TechCategory, Project, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Santiago Andrés Pineda",
  role: "Full Stack Developer",
  subtitle: "Desarrollador Full Stack con más de 4 años de experiencia. Creo aplicaciones web y de escritorio, diseño automatizaciones e integro Inteligencia Artificial (IA) para construir soluciones completas y escalables.",
  location: "Palmira, Colombia",
  linkedin: "https://www.linkedin.com/in/santiagopineda-dev",
  github: "https://github.com/saintell",
  email: "mailto:santipinra@gmail.com",
  phone: "tel:3183847315",
  phoneLabel: "318 384 7315"
};

export const TECH_STACK: TechCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      { name: "React 18", description: "Construcción de interfaces de usuario interactivas, como el Asistente Digital AI y dashboards de ETL." },
      { name: "Angular 17-20", description: "Desarrollo de portales empresariales modulares, como el Corporate User Portal para gestión de usuarios interactivos." },
      { name: "TypeScript", description: "Tipado estático en el frontend y backend (Node) para asegurar escalabilidad y calidad de código." },
      { name: "JavaScript", description: "Desarrollo dinámico, integración con APIs del navegador y scripts de validación complejos." },
      { name: "HTML", description: "Maquetación semántica y accesible para las distintas aplicaciones web." },
      { name: "CSS", description: "Estilización avanzada, con variables CSS, grid/flexbox y animaciones keyframes." },
      { name: "Tailwind", description: "Estilización utilitaria ágil, usada intensamente en mis proyectos para lograr diseños responsive y modernos." },
      { name: "Material UI", description: "Creación de interfaces estandarizadas en aplicaciones web empresariales." },
      { name: "PrimeNG", description: "Implementación de tablas avanzadas y componentes en Angular." }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Python", description: "Lógica de negocio, procesamiento de datos pesados (ETL) e integraciones con IA (Gemini, OpenAI)." },
      { name: "FastAPI", description: "Desarrollo de APIs RESTful de alto rendimiento y asíncronas para web sockets." },
      { name: "Django", description: "Aplicaciones monolíticas y sistemas robustos con administración y ORM integrado." },
      { name: "Node.js", description: "Servicios Backend y automatizaciones con JavaScript en el lado del servidor." },
      { name: "PHP (Laravel)", description: "Desarrollo estructurado de Backend, migraciones, controladores y APIs." },
      { name: ".NET", description: "Integración en ecosistema empresarial para seguimiento de materiales y facturación." }
    ]
  },
  {
    title: "Data & ETL",
    icon: Database,
    items: [
      { name: "PostgreSQL", description: "Manejo de base de datos relacional para servicios críticos y sistemas escalables." },
      { name: "SQL Server", description: "Gestión de bases de datos empresariales de alto rendimiento e integración en entornos Microsoft." },
      { name: "MySQL", description: "Implementación de bases de datos ágiles para aplicaciones transaccionales." },
      { name: "MongoDB", description: "Almacenamiento NoSQL para persistencia de eventos, logs y datos desestructurados." },
      { name: "Pandas", description: "Transformación, limpieza de datos y generación de reportes integrados en el flujo ETL con Python." }
    ]
  },
  {
    title: "Desktop & Realtime",
    icon: Monitor,
    items: [
      { name: "Electron", description: "Soporte multiplataforma para aplicaciones como ETL Tools, fusionando tecnologías web con el entorno OS." },
      { name: "PyQt5", description: "Construcción de aplicaciones desktop nativas como Kiosko Seguro y control de hardware/UI." },
      { name: "WebSockets", description: "Comunicación bidireccional de baja latencia para asistentes de voz y monitorización en tiempo real." }
    ]
  },
  {
    title: "Herramientas",
    icon: Wrench,
    items: [
      { name: "Docker", description: "Containerización de servicios, orquestando entornos de desarrollo y despliegues predecibles." },
      { name: "Azure DevOps", description: "Gestión de repositorios, CI/CD pipelines y tableros ágiles para control de tareas." },
      { name: "Git", description: "Versionamiento de código fuente y colaboración mediante ramas." },
      { name: "Postman", description: "Pruebas de endpoints REST, diseño y documentación interactiva de APIs." }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Asistente Digital AI",
    description: "Aplicación conversacional de IA con contexto de voz bidireccional, síntesis de audio en tiempo real y avatar interpretativo interactivo.",
    longDescription: "Arquitectura frontend en React, backend Python/FastAPI. Integración con OpenAI y WebSockets para mantener procesamiento al instante. Manejo de audio, síntesis de respuestas en tiempo real y renderizado de un avatar interactivo con D-ID.",
    category: "AI / Conversational Web",
    filterCategory: "ai",
    architecture: "React 18 + FastAPI + OpenAI + WebSockets",
    challenge: "Construir una experiencia conversacional fluida por voz donde el usuario interactúe con un asistente digital sin latencia perceptible entre la captura de audio, el razonamiento del LLM y la respuesta visual.",
    solution: "Implementé una arquitectura asíncrona en FastAPI comunicada por WebSockets con un cliente React 18, integrando modelos de OpenAI para contexto conversacional, síntesis de voz en streaming y sincronización con un avatar interpretativo.",
    impact: "Interacción natural en tiempo real con baja latencia en el procesamiento de voz y respuesta multimodal continua.",
    highlightMetric: "Streaming Realtime · Voz + Avatar IA",
    featured: true,
    tags: ["React 18", "FastAPI", "OpenAI", "WebSockets"]
  },
  {
    title: "Automatización Logística",
    description: "Sistema desktop modular que automatiza la normalización de direcciones con IA (Gemini API), geocodificación y asignación de zonas.",
    longDescription: "Desarrollé un sistema de escritorio en Python para procesar lotes logísticos desde Excel. Integra Gemini API, API de geocodificación y SQLite. Automatiza tareas eliminando reprocesos con caché y motores de reglas, segmentando direcciones por zonas.",
    category: "AI / Logistics Automation",
    filterCategory: "ai",
    architecture: "Python + Gemini API + Geocoding + SQLite",
    challenge: "Los lotes logísticos en Excel contenían direcciones no estandarizadas y ambiguas, generando altos tiempos de validación manual, reprocesos y errores en la asignación de rutas operativas.",
    solution: "Diseñé un pipeline modular en Python que normaliza direcciones mediante Gemini API, resuelve coordenadas con Geocoding API e implementa una capa de caché local en SQLite junto con un motor de reglas de zonificación.",
    impact: "Eliminación de reprocesos manuales en lotes repetitivos mediante caché inteligente y clasificación geográfica automatizada.",
    highlightMetric: "Normalización IA + Caché SQLite",
    featured: true,
    tags: ["Gemini API", "Geocoding API", "SQLite", "Python"]
  },
  {
    title: "AvanzaEmpleo",
    description: "Plataforma integral de empleabilidad con módulos para candidatos, empresas y administración de vacantes laborales.",
    longDescription: "Desarrollé funcionalidades full stack en React y Python. Implementé inicio de sesión, recuperación de contraseñas, registro de usuarios, creación/edición de ofertas, búsqueda y filtrado. Mejoré perfiles de candidatos y empresas con carga de imágenes y campos dinámicos.",
    category: "Full Stack / Web Platform",
    filterCategory: "enterprise",
    architecture: "React 18 + Python REST API",
    challenge: "Conectar candidatos y empresas en un flujo unificado que soportara perfiles dinámicos, publicación de vacantes y filtrado ágil sin degradar la experiencia de usuario.",
    solution: "Desarrollé los módulos Full Stack en React y Python incluyendo autenticación completa, recuperación de credenciales, gestión de perfiles con carga de archivos y motor de búsqueda con filtros multicriterio.",
    impact: "Centralización del ciclo completo de reclutamiento desde el registro de empresas hasta la postulación de candidatos.",
    highlightMetric: "Arquitectura Full Stack End-to-End",
    featured: true,
    tags: ["React 18", "Python"]
  },
  {
    title: "Clientes Interactivos & Balanceados",
    description: "Sistemas distribuidos para el seguimiento del estado de envíos, gestión de entradas de material, transformación y salida de producto.",
    longDescription: "Sistemas integrados desarrollados con Angular y .NET. Fungen como un punto de logística crucial para gestionar la mercancía, registrar cambios en inventarios, gestionar lotes de transformación y realizar seguimientos detallados.",
    category: "Enterprise / Logistics",
    filterCategory: "enterprise",
    architecture: "Angular 17-20 + .NET Enterprise API",
    challenge: "Trazar con precisión el flujo de materiales desde la recepción en planta, pasando por lotes de transformación industrial, hasta la salida y despacho final al cliente.",
    solution: "Construí interfaces empresariales modulares en Angular integradas con servicios .NET para el control de inventarios, balanceo de lotes de producción y trazabilidad de estados de envío.",
    impact: "Visibilidad operativa de extremo a extremo sobre inventarios en transformación y despachos corporativos.",
    highlightMetric: "Trazabilidad Industrial .NET + Angular",
    tags: ["Angular 17-20", ".NET"]
  },
  {
    title: "Corporate User Portal",
    description: "Portal corporativo para la administración centralizada de usuarios empresariales y asignación dinámica de roles y permisos.",
    longDescription: "Módulos empresariales desarrollados junto con Angular y backend .NET. Provee interfaces interactivas para gestionar usuarios y múltiples roles permitiendo un control de acceso robusto a lo largo de la organización.",
    category: "Enterprise / RBAC",
    filterCategory: "enterprise",
    architecture: "Angular 17-20 + .NET",
    challenge: "Administrar permisos y roles dinámicos para múltiples áreas de la organización manteniendo seguridad y facilidad de auditoría administrativa.",
    solution: "Implementé un portal frontend en Angular 17-20 con tablas reactivas, flujos de asignación de permisos basados en roles (RBAC) y comunicación estructurada con APIs corporativas.",
    impact: "Estandarización del control de acceso organizacional en una interfaz única e intuitiva.",
    highlightMetric: "Gestión RBAC Multi-Rol",
    tags: ["Angular 17-20", ".NET"]
  },
  {
    title: "ETL Tools",
    description: "Suite de escritorio para ejecución y monitoreo de procesos ETL, reemplazo de archivos de datos y estado de nodos MongoDB.",
    longDescription: "Aplicación desktop con React y Electron guiada por scripts en Python para la carga y reemplazo de archivos ETL. Facilita la observación del estado de servidores y la monitorización de las bases de datos MongoDB.",
    category: "Data & ETL / Desktop",
    filterCategory: "data",
    architecture: "React 18 + Electron + Python + MongoDB",
    challenge: "Ejecutar flujos de extracción y transformación de archivos pesados y supervisar la salud de instancias MongoDB sin depender de consolas manuales propensas a error humano.",
    solution: "Unifiqué una interfaz gráfica en React + Electron que orquesta scripts de procesamiento en Python y presenta diagnósticos en vivo de servidores y colecciones MongoDB.",
    impact: "Operación segura de cargas ETL y visibilidad inmediata del estado de bases de datos para el equipo técnico.",
    highlightMetric: "Orquestación ETL Desktop",
    tags: ["React 18", "Electron", "Python", "MongoDB"]
  },
  {
    title: "Smart Energy",
    description: "Servicio de detección de eventos en logs mediante Python Watchdog con procesamiento continuo y dashboard analítico en React.",
    longDescription: "Servicio implementado en Python que usa Watchdog para monitorear archivos de logs locales. Procesa y categoriza eventos en tiempo real para visualizarlos en un dashboard construido sobre React.",
    category: "Monitoring & Data",
    filterCategory: "data",
    architecture: "Python Watchdog + React 18 Dashboard",
    challenge: "Detectar anomalías y eventos operativos en archivos de log locales al instante sin recurrir a procesos manuales de revisión.",
    solution: "Desarrollé un demonio de monitoreo en Python con Watchdog que parsea, filtra y estructura eventos en vivo para alimentarlos en un dashboard visual en React.",
    impact: "Detección temprana de eventos críticos y visualización clara de métricas operativas en tiempo real.",
    highlightMetric: "Monitoreo de Logs en Tiempo Real",
    tags: ["React 18", "Python", "Watchdog"]
  },
  {
    title: "Kiosko Seguro",
    description: "Aplicación nativa de escritorio en modo kiosko que restringe navegación a dominios autorizados y reporta telemetría en tiempo real.",
    longDescription: "Aplicación de escritorio desarrollada en PyQt5 equipada con WebSockets y backend en Python. Diseñada para operar en modo kiosko, limita el acceso únicamente a URLs preestablecidas y reporta constantemente la actividad del usuario.",
    category: "Desktop Security / Realtime",
    filterCategory: "data",
    architecture: "PyQt5 + Python + WebSockets",
    challenge: "Bloquear el uso no autorizado del sistema operativo en terminales físicas mientras se supervisa remotamente el estado y actividad de cada estación.",
    solution: "Construí un entorno encapsulado con PyQt5 con listas blancas de URLs y un canal persistente de WebSockets hacia el servidor central para reportar eventos al instante.",
    impact: "Control total de terminales dedicadas con auditoría centralizada y prevención de navegación fuera de políticas.",
    highlightMetric: "Control de Terminales + WebSockets",
    tags: ["PyQt5", "WebSockets", "Python"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Desarrollador de Software",
    company: "PCA Ingeniería",
    period: "Nov 2021 – May 2026 | Cali, Colombia",
    description: "Desarrollo frontend y backend para aplicaciones web y de escritorio empresariales. Integración de modelos de IA (OpenAI, Gemini), comunicación en tiempo real con WebSockets, diseño de interfaces modulares, construcción de pipelines ETL y despliegues contenerizados con Docker.",
    type: "work",
    technologies: ["React 18", "Angular", "Python", "FastAPI", ".NET", "OpenAI API", "WebSockets", "Docker", "ETL"]
  },
  {
    role: "Desarrollador Full Stack Freelance",
    company: "AvanzaEmpleo",
    period: "2024 | Remoto, Colombia",
    description: "Diseño e implementación de módulos Full Stack en React y Python para plataforma de empleabilidad. Desarrollo de autenticación segura, perfiles dinámicos de candidatos y empresas, motor de búsqueda multicriterio y panel de administración de vacantes.",
    type: "work",
    technologies: ["React 18", "Python", "REST API", "PostgreSQL", "Tailwind", "Git"]
  },
  {
    role: "Soporte TI / Desarrollador Jr.",
    company: "Fundación BioDess",
    period: "2020 – 2021 | Cali, Colombia",
    description: "Mantenimiento de infraestructura de servidores, sitios web y plataformas internas; soporte tecnológico integral a usuarios corporativos y administración de bases de datos relacionales y NoSQL.",
    type: "work",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "JavaScript", "HTML/CSS", "Linux"]
  },
  {
    role: "Ingeniería en Sistemas",
    company: "Universidad Santiago de Cali",
    period: "2024 – Actual | Virtual, Colombia",
    description: "Formación profesional enfocada en arquitectura de software empresarial, estructuras de datos, algoritmos avanzados y gestión de proyectos tecnológicos.",
    type: "education",
    technologies: ["Arquitectura de Software", "Algoritmos", "Ingeniería de Datos", "Cloud"]
  },
  {
    role: "Certificaciones Destacadas",
    company: "Platzi",
    period: "2025 – 2026 | Formación Continua",
    description: "Especialización continua en herramientas modernas de inteligencia artificial e ingeniería: Claude Code, Prompt Engineering, Automatizaciones con n8n, AI para Devs, Frontend Developer y API REST con JavaScript.",
    type: "education",
    technologies: ["Claude Code", "Prompt Engineering", "n8n", "LLMs", "REST APIs"]
  },
  {
    role: "Tecnología en Sistemas de Información",
    company: "Universidad del Valle",
    period: "2016 – 2021 | Palmira, Colombia",
    description: "Programa académico culminado con énfasis en ciclo de vida de desarrollo de software, bases de datos relacionales y programación orientada a objetos.",
    type: "education",
    technologies: ["Ingeniería de Software", "Bases de Datos", "POO", "Redes"]
  }
];
