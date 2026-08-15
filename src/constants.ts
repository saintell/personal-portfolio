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
      { name: "Angular 17-20", description: "Desarrollo de portales empresariales modulares, como el API MOR para gestión de usuarios interactivos." },
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
    title: "AvanzaEmpleo",
    description: "Plataforma de empleo con módulos de candidatos, empresas y administración de ofertas laborales.",
    longDescription: "Desarrollé funcionalidades full stack en React y Python. Implementé inicio de sesión, recuperación de contraseñas, registro de usuarios, creación/edición de ofertas, búsqueda y filtrado. Mejoré perfiles de candidatos y empresas con carga de imágenes y campos dinámicos.",
    category: "Full Stack / Web",
    tags: ["React 18", "Python"]
  },
  {
    title: "Automatización Logística",
    description: "Sistema desktop modular que automatiza la normalización de direcciones con IA (Gemini API), geocodificación y asignación de zonas.",
    longDescription: "Desarrollé un sistema de escritorio en Python para procesar lotes logísticos desde Excel. Integra Gemini API, API de geocodificación y SQLite. Automatiza tareas eliminando reprocesos con caché y motores de reglas, segmentando direcciones por zonas.",
    category: "Desktop / AI / Logistics",
    tags: ["Gemini API", "Geocoding API", "SQLite", "Python"]
  },
  {
    title: "Asistente Digital AI",
    description: "Aplicación de IA (React + Python/FastAPI + OpenAI) con contexto de voz, envío y síntesis de audio, y avatar interpretativo.",
    longDescription: "Arquitectura frontend en React, backend Python/FastAPI. Integración con OpenAI y WebSockets para mantener procesamiento al instante. Manejo de audio, síntesis de respuestas en tiempo real y renderizado de un avatar interactivo con D-ID.",
    category: "AI / Web",
    tags: ["React 18", "FastAPI", "OpenAI", "WebSockets"]
  },
  {
    title: "Kiosko Seguro",
    description: "App de escritorio interactiva que limita acceso a URLs y reporta actividad al backend en tiempo real.",
    longDescription: "Aplicación de escritorio desarrollada en PyQt5 equipada con WebSockets y backend en Python. Diseñada para operar en modo kiosko, limita el acceso únicamente a URLs preestablecidas y reporta constantemente la actividad del usuario.",
    category: "Desktop / Security",
    tags: ["PyQt5", "WebSockets", "Python"]
  },
  {
    title: "Smart Energy",
    description: "Servicio de detección de cambios en logs vía Python Watchdog que procesa y envía eventos a un dashboard de reportes.",
    longDescription: "Servicio implementado en Python que usa Watchdog para monitorear archivos de logs locales. Procesa y categoriza eventos en tiempo real para visualizarlos en un dashboard construido sobre React.",
    category: "Monitoring",
    tags: ["React 18", "Python", "Watchdog"]
  },
  {
    title: "ETL Tools",
    description: "UI de escritorio sin backend para procesos ETL y automatización, con visualización de estado de servidor y MongoDB.",
    longDescription: "Aplicación desktop con React y Electron guiada por scripts en Python para la carga y reemplazo de archivos ETL. Facilita la observación del estado de servidores y la monitorización de las bases de datos MongoDB.",
    category: "DevTools",
    tags: ["React 18", "Electron", "Python", "MongoDB"]
  },
  {
    title: "API MOR",
    description: "Frontend para portal de gestión de usuarios empresariales y asignación dinámica de roles en la organización.",
    longDescription: "Módulos empresariales desarrollados junto con Angular y backend .NET. Provee interfaces interactivas para gestionar usuarios y múltiples roles permitiendo un control de acceso robusto a lo largo de la organización.",
    category: "Enterprise",
    tags: ["Angular 17-20"]
  },
  {
    title: "Clientes Interactivos & Balanceados",
    description: "Sistemas distribuidos para el seguimiento del estado de envíos, gestión de entradas de material, transformación y salida de producto.",
    longDescription: "Sistemas integrados desarrollados con Angular y .NET. Fungen como un punto de logística crucial para gestionar la mercancía, registrar cambios en inventarios, gestionar lotes de transformación y realizar seguimientos detallados.",
    category: "Enterprise / Logistics",
    tags: ["Angular 17-20", ".NET"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Tecnología en Sistemas de Información",
    company: "Universidad del Valle",
    period: "2016 – 2021 | Palmira, Colombia",
    description: "Programa académico culminado focalizado en ingeniería de software y programación.",
    type: "education"
  },
  {
    role: "Soporte TI / Desarrollador Jr.",
    company: "Fundación BioDess",
    period: "2020 – 2021 | Cali, Colombia",
    description: "Mantenimiento de servidores, equipos y sitios web; soporte integral de tecnologías a usuarios corporativos y gestión en BDs (PostgreSQL, MySQL, MongoDB).",
    type: "work"
  },
  {
    role: "Desarrollador de Software",
    company: "PCA Ingeniería",
    period: "Nov 2021 – May 2026 | Cali, Colombia",
    description: "Desarrollo frontend y backend para apps web y escritorio. Integración de OpenAI API, WebSockets. Diseño de componentes UI performantes, pipelines ETL y despliegue usando Docker.",
    type: "work"
  },
  {
    role: "Desarrollador Full Stack Freelance",
    company: "AvanzaEmpleo",
    period: "2024 | Remoto, Colombia",
    description: "Plataforma de empleo: Implementé módulos de frontend en React y backend en Python. Desarrollé autenticación, perfiles, búsqueda y gestión de ofertas laborales.",
    type: "work"
  },
  {
    role: "Certificaciones Destacadas",
    company: "Platzi",
    period: "2025 - 2026",
    description: "Claude Code, Prompt Engineering, Automatizaciones con n8n, AI para Devs, Frontend Developer, API REST con JS.",
    type: "education"
  },
  {
    role: "Ingeniería en Sistemas",
    company: "Universidad Santiago de Cali",
    period: "2024 – Actual | Virtual, Colombia",
    description: "Estudiante activo, fundamentación en arquitectura de software y algoritmos avanzados.",
    type: "education"
  }
];
