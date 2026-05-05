import {
  Code2,
  Server,
  Monitor,
  Wrench
} from 'lucide-react';
import { TechCategory, Project, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Santiago Andrés Pineda",
  role: "Desarrollador de Software - Frontend Full-Stack",
  subtitle: "Especialista en React, Angular y arquitecturas escalables con Python y Node.js. 4 años transformando requerimientos en soluciones end-to-end.",
  location: "Cali, Colombia",
  linkedin: "https://linkedin.com/in/santiagopineda-dev/",
  github: "https://github.com/saintell",
  email: "mailto:santipinra@gmail.com"
};

export const TECH_STACK: TechCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React 18", "Angular 17-19", "TypeScript", "Next.js", "Material UI", "PrimeNG"]
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Python (FastAPI, Django)", "Node.js (NestJS)", "PHP (Laravel)", ".NET"]
  },
  {
    title: "Desktop",
    icon: Monitor,
    items: ["Electron", "PyQt5"]
  },
  {
    title: "Herramientas",
    icon: Wrench,
    items: ["Docker", "Azure DevOps", "Git Flow", "WebSockets"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Asistente Digital con IA",
    description: "Aplicación interactiva con voz y avatar que permite síntesis de audio y respuestas contextuales inteligentes.",
    category: "AI / Web",
    tags: ["React", "FastAPI", "OpenAI", "Web Speech API"]
  },
  {
    title: "Kiosko Seguro",
    description: "App de escritorio robusta para control de acceso físico y monitoreo de seguridad en tiempo real.",
    category: "Desktop / Security",
    tags: ["PyQt5", "WebSockets", "Python"]
  },
  {
    title: "Smart Energy Dashboard",
    description: "Sistema de monitoreo de logs de infraestructura energética con visualización de eventos críticos en tiempo real.",
    category: "Monitoring",
    tags: ["React", "Python Watchdog", "D3.js"]
  },
  {
    title: "ETL Desktop Tools",
    description: "Suite de herramientas de escritorio para automatización de carga de datos y visualización de estado de servidores y bases de datos.",
    category: "DevTools",
    tags: ["React", "Electron", "MongoDB"]
  },
  {
    title: "Gestión Empresarial ERP",
    description: "Módulos empresariales para control de inventario de materiales y gestión centralizada de usuarios.",
    category: "Enterprise",
    tags: ["Angular 17-19", "API MOR", "PrimeNG"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Desarrollador de Software",
    company: "PCA Ingeniería",
    period: "Nov 2021 - Presente",
    description: "Liderando integraciones con APIs de IA y desarrollo de servicios en tiempo real para clientes corporativos. Arquitectura de soluciones híbridas web/desktop.",
    type: "work"
  },
  {
    role: "Soporte TI / Desarrollador Jr",
    company: "Fundación BioDess",
    period: "Anterior",
    description: "Mantenimiento de infraestructura y desarrollo de scripts de automatización para gestión de datos biológicos.",
    type: "work"
  },
  {
    role: "Tecnólogo en Sistemas de Información",
    company: "Universidad del Valle",
    period: "Graduado",
    description: "Formación sólida en ingeniería de software, bases de datos y algoritmos.",
    type: "education"
  }
];
