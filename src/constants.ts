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
  role: "Software Developer — Frontend Full-Stack",
  subtitle: "Desarrollador con más de 4 años construyendo aplicaciones web y de escritorio. Foco en Frontend (React, Angular) y experiencia sólida en Backend.",
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
    items: ["React 18", "Angular 17-20", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "Material UI", "PrimeNG"]
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Python", "FastAPI", "Django", "Node.js", "PHP (Laravel)", ".NET"]
  },
  {
    title: "Data & ETL",
    icon: Database,
    items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Pandas"]
  },
  {
    title: "Desktop & Realtime",
    icon: Monitor,
    items: ["Electron", "PyQt5", "WebSockets"]
  },
  {
    title: "Herramientas",
    icon: Wrench,
    items: ["Docker", "Azure DevOps", "Git", "Postman"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Asistente Digital AI",
    description: "Aplicación de IA (React + Python/FastAPI + OpenAI) con contexto de voz, envío y síntesis de audio, y avatar interpretativo.",
    category: "AI / Web",
    tags: ["React 18", "FastAPI", "OpenAI", "WebSockets"]
  },
  {
    title: "Kiosko Seguro",
    description: "App de escritorio interactiva que limita acceso a URLs y reporta actividad al backend en tiempo real.",
    category: "Desktop / Security",
    tags: ["PyQt5", "WebSockets", "Python"]
  },
  {
    title: "Smart Energy",
    description: "Servicio de detección de cambios en logs vía Python Watchdog que procesa y envía eventos a un dashboard de reportes.",
    category: "Monitoring",
    tags: ["React 18", "Python", "Watchdog"]
  },
  {
    title: "ETL Tools",
    description: "UI de escritorio sin backend para procesos ETL y automatización, con visualización de estado de servidor y MongoDB.",
    category: "DevTools",
    tags: ["React 18", "Electron", "Python", "MongoDB"]
  },
  {
    title: "API MOR",
    description: "Frontend para portal de gestión de usuarios empresariales y asignación dinámica de roles en la organización.",
    category: "Enterprise",
    tags: ["Angular 17-20"]
  },
  {
    title: "Clientes Interactivos & Balanceados",
    description: "Sistemas distribuidos para el seguimiento del estado de envíos, gestión de entradas de material, transformación y salida de producto.",
    category: "Enterprise / Logistics",
    tags: ["Angular 17-20", ".NET"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Desarrollador de Software",
    company: "PCA Ingeniería",
    period: "Nov 2021 – May 2026 | Cali, Colombia",
    description: "Desarrollo frontend y backend para apps web y escritorio. Integración de OpenAI API, WebSockets. Diseño de componentes UI performantes, pipelines ETL y despliegue usando Docker.",
    type: "work"
  },
  {
    role: "Soporte TI / Desarrollador Jr.",
    company: "Fundación BioDess",
    period: "2020 – 2021 | Cali, Colombia",
    description: "Mantenimiento de servidores, equipos y sitios web; soporte integral de tecnologías a usuarios corporativos y gestión en BDs (PostgreSQL, MySQL, MongoDB).",
    type: "work"
  },
  {
    role: "Ingeniería en Sistemas",
    company: "Universidad Santiago de Cali",
    period: "2024 – Actual | Virtual, Colombia",
    description: "Estudiante activo, fundamentación en arquitectura de software y algoritmos avanzados.",
    type: "education"
  },
  {
    role: "Tecnología en Sistemas de Información",
    company: "Universidad del Valle",
    period: "2016 – 2021 | Palmira, Colombia",
    description: "Programa académico culminado focalizado en ingeniería de software y programación.",
    type: "education"
  }
];
