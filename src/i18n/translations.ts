export const translations = {
  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', stack: 'Stack', projects: 'Proyectos', experience: 'Trayectoria', contact: 'Contacto' },
    hero: {
      subtitle: 'Full Stack Developer | React · Angular · Python · FastAPI',
      description: 'Desarrollador de software enfocado en crear soluciones tecnológicas integrales. Mi experiencia abarca aplicaciones web y de escritorio, desarrollo de automatizaciones e integración de Inteligencia Artificial, uniendo arquitecturas backend robustas con interfaces modernas.',
      viewProjects: 'Ver Proyectos',
      contact: 'Contactar',
      downloadCV: 'Descargar CV'
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy Desarrollador Full Stack con experiencia en la construcción de productos digitales integrales. En el frontend, me especializo en crear interfaces web y de escritorio modernas y eficientes utilizando <strong class="font-medium text-white">React, TypeScript, Angular y JavaScript</strong>, priorizando siempre la experiencia de usuario.',
      p2: 'En el backend, diseño APIs RESTful, arquitecturas escalables y gestión de bases de datos, trabajando fuertemente con <strong class="font-medium text-white">Python, FastAPI, Node.js y Docker</strong>. Además, desarrollo automatizaciones de procesos e integro soluciones con <strong class="font-medium text-white">Inteligencia Artificial (IA)</strong> para potenciar las capacidades de cada proyecto.',
      p3: 'Busco seguir aportando valor como Full Stack Developer en proyectos retadores, aplicando buenas prácticas de código limpio, despliegues eficientes y soluciones tecnológicas que resuelvan problemas complejos de negocio de extremo a extremo.'
    },
    stack: {
      title: 'Stack', highlight: 'Tecnológico', subtitle: 'Herramientas, lenguajes y tecnologías con las que trabajo diariamente.', clickDetails: 'Haz clic para detalles',
      categories: {
        Frontend: "Frontend", Backend: "Backend", Data: "Data & ETL", Desktop: "Desktop & Realtime", Tools: "Herramientas"
      },
      items: {
        "React 18": "Construcción de interfaces de usuario interactivas, como el Asistente Digital AI y dashboards de ETL.",
        "Angular 17-20": "Desarrollo de portales empresariales modulares, como el Corporate User Portal para gestión de usuarios interactivos.",
        "TypeScript": "Tipado estático en el frontend y backend (Node) para asegurar escalabilidad y calidad de código.",
        "JavaScript": "Desarrollo dinámico, integración con APIs del navegador y scripts de validación complejos.",
        "HTML": "Maquetación semántica y accesible para las distintas aplicaciones web.",
        "CSS": "Estilización avanzada, con variables CSS, grid/flexbox y animaciones keyframes.",
        "Tailwind": "Estilización utilitaria ágil, usada intensamente en mis proyectos para lograr diseños responsive y modernos.",
        "Material UI": "Creación de interfaces estandarizadas en aplicaciones web empresariales.",
        "PrimeNG": "Implementación de tablas avanzadas y componentes en Angular.",
        "Python": "Lógica de negocio, procesamiento de datos pesados (ETL) e integraciones con IA (Gemini, OpenAI).",
        "FastAPI": "Desarrollo de APIs RESTful de alto rendimiento y asíncronas para web sockets.",
        "Django": "Aplicaciones monolíticas y sistemas robustos con administración y ORM integrado.",
        "Node.js": "Servicios Backend y automatizaciones con JavaScript en el lado del servidor.",
        "PHP (Laravel)": "Desarrollo estructurado de Backend, migraciones, controladores y APIs.",
        ".NET": "Integración en ecosistema empresarial para seguimiento de materiales y facturación.",
        "PostgreSQL": "Manejo de base de datos relacional para servicios críticos y sistemas escalables.",
        "SQL Server": "Gestión de bases de datos empresariales de alto rendimiento e integración en entornos Microsoft.",
        "MySQL": "Implementación de bases de datos ágiles para aplicaciones transaccionales.",
        "MongoDB": "Almacenamiento NoSQL para persistencia de eventos, logs y datos desestructurados.",
        "Pandas": "Transformación, limpieza de datos y generación de reportes integrados en el flujo ETL con Python.",
        "Electron": "Soporte multiplataforma para aplicaciones como ETL Tools, fusionando tecnologías web con el entorno OS.",
        "PyQt5": "Construcción de aplicaciones desktop nativas como Kiosko Seguro y control de hardware/UI.",
        "WebSockets": "Comunicación bidireccional de baja latencia para asistentes de voz y monitorización en tiempo real.",
        "Docker": "Containerización de servicios, orquestando entornos de desarrollo y despliegues predecibles.",
        "Azure DevOps": "Gestión de repositorios, CI/CD pipelines y tableros ágiles para control de tareas.",
        "Git": "Versionamiento de código fuente y colaboración mediante ramas.",
        "Postman": "Pruebas de endpoints REST, diseño y documentación interactiva de APIs."
      }
    },
    projects: {
      title: 'Proyectos', highlight: 'Destacados', subtitle: 'Una selección de mis trabajos más recientes y relevantes.', all: 'Todos', viewCode: 'Código', viewDemo: 'Demo', close: 'Cerrar detalles del proyecto',
      items: {
        "AvanzaEmpleo": { desc: "Plataforma de empleo con módulos de candidatos, empresas y administración de ofertas laborales.", long: "Desarrollé funcionalidades full stack en React y Python. Implementé inicio de sesión, recuperación de contraseñas, registro de usuarios, creación/edición de ofertas, búsqueda y filtrado. Mejoré perfiles de candidatos y empresas con carga de imágenes y campos dinámicos." },
        "Automatización Logística": { desc: "Sistema desktop modular que automatiza la normalización de direcciones con IA (Gemini API), geocodificación y asignación de zonas.", long: "Desarrollé un sistema de escritorio en Python para procesar lotes logísticos desde Excel. Integra Gemini API, API de geocodificación y SQLite. Automatiza tareas eliminando reprocesos con caché y motores de reglas, segmentando direcciones por zonas." },
        "Asistente Digital AI": { desc: "Aplicación de IA (React + Python/FastAPI + OpenAI) con contexto de voz, envío y síntesis de audio, y avatar interpretativo.", long: "Arquitectura frontend en React, backend Python/FastAPI. Integración con OpenAI y WebSockets para mantener procesamiento al instante. Manejo de audio, síntesis de respuestas en tiempo real y renderizado de un avatar interactivo con D-ID." },
        "Kiosko Seguro": { desc: "App de escritorio interactiva que limita acceso a URLs y reporta actividad al backend en tiempo real.", long: "Aplicación de escritorio desarrollada en PyQt5 equipada con WebSockets y backend en Python. Diseñada para operar en modo kiosko, limita el acceso únicamente a URLs preestablecidas y reporta constantemente la actividad del usuario." },
        "Smart Energy": { desc: "Servicio de detección de cambios en logs vía Python Watchdog que procesa y envía eventos a un dashboard de reportes.", long: "Servicio implementado en Python que usa Watchdog para monitorear archivos de logs locales. Procesa y categoriza eventos en tiempo real para visualizarlos en un dashboard construido sobre React." },
        "ETL Tools": { desc: "UI de escritorio sin backend para procesos ETL y automatización, con visualización de estado de servidor y MongoDB.", long: "Aplicación desktop con React y Electron guiada por scripts en Python para la carga y reemplazo de archivos ETL. Facilita la observación del estado de servidores y la monitorización de las bases de datos MongoDB." },
        "Corporate User Portal": { desc: "Frontend para portal de gestión de usuarios empresariales y asignación dinámica de roles en la organización.", long: "Módulos empresariales desarrollados junto con Angular y backend .NET. Provee interfaces interactivas para gestionar usuarios y múltiples roles permitiendo un control de acceso robusto a lo largo de la organización." },
        "Clientes Interactivos & Balanceados": { desc: "Sistemas distribuidos para el seguimiento del estado de envíos, gestión de entradas de material, transformación y salida de producto.", long: "Sistemas integrados desarrollados con Angular y .NET. Fungen como un punto de logística crucial para gestionar la mercancía, registrar cambios en inventarios, gestionar lotes de transformación y realizar seguimientos detallados." }
      }
    },
    experience: {
      title: 'Trayectoria', highlight: 'y Formación', subtitle: 'Mi evolución profesional y académica a lo largo del tiempo.',
      items: {
        "Tecnología en Sistemas de Información": { role: "Tecnología en Sistemas de Información", period: "2016 – 2021 | Palmira, Colombia", desc: "Programa académico culminado focalizado en ingeniería de software y programación." },
        "Soporte TI / Desarrollador Jr.": { role: "Soporte TI / Desarrollador Jr.", period: "2020 – 2021 | Cali, Colombia", desc: "Mantenimiento de servidores, equipos y sitios web; soporte integral de tecnologías a usuarios corporativos y gestión en BDs (PostgreSQL, MySQL, MongoDB)." },
        "Desarrollador de Software": { role: "Desarrollador de Software", period: "Nov 2021 – May 2026 | Cali, Colombia", desc: "Desarrollo frontend y backend para apps web y escritorio. Integración de OpenAI API, WebSockets. Diseño de componentes UI performantes, pipelines ETL y despliegue usando Docker." },
        "Desarrollador Full Stack Freelance": { role: "Desarrollador Full Stack Freelance", period: "2024 | Remoto, Colombia", desc: "Plataforma de empleo: Implementé módulos de frontend en React y backend en Python. Desarrollé autenticación, perfiles, búsqueda y gestión de ofertas laborales." },
        "Certificaciones Destacadas": { role: "Certificaciones Destacadas", period: "2025 - 2026", desc: "Claude Code, Prompt Engineering, Automatizaciones con n8n, AI para Devs, Frontend Developer, API REST con JS." },
        "Ingeniería en Sistemas": { role: "Ingeniería en Sistemas", period: "2024 – Actual | Virtual, Colombia", desc: "Estudiante activo, fundamentación en arquitectura de software y algoritmos avanzados." }
      }
    },
    contact: {
      title: 'Contacto', subtitle: '¿Tienes un proyecto en mente o buscas un desarrollador Full Stack? Hablemos.', name: 'Nombre', email: 'Email', message: 'Mensaje', send: 'Enviar Mensaje', sending: 'Enviando...', success: '¡Mensaje enviado con éxito!', error: 'Hubo un error al enviar el mensaje. Intenta de nuevo.'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', stack: 'Stack', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    hero: {
      subtitle: 'Full Stack Developer | React · Angular · Python · FastAPI',
      description: 'Software developer focused on creating comprehensive technological solutions. My experience spans web and desktop applications, automation development, and Artificial Intelligence integration, merging robust backend architectures with modern interfaces.',
      viewProjects: 'View Projects',
      contact: 'Contact Me',
      downloadCV: 'Download CV'
    },
    about: {
      title: 'About Me',
      p1: 'I am a Full Stack Developer with experience building comprehensive digital products. On the frontend, I specialize in creating modern and efficient web and desktop interfaces using <strong class="font-medium text-white">React, TypeScript, Angular, and JavaScript</strong>, always prioritizing user experience.',
      p2: 'On the backend, I design RESTful APIs, scalable architectures, and manage databases, working heavily with <strong class="font-medium text-white">Python, FastAPI, Node.js, and Docker</strong>. Additionally, I develop process automations and integrate solutions with <strong class="font-medium text-white">Artificial Intelligence (AI)</strong> to enhance project capabilities.',
      p3: 'I look forward to adding value as a Full Stack Developer in challenging projects, applying clean code practices, efficient deployments, and technological solutions that solve complex business problems end-to-end.'
    },
    stack: {
      title: 'Tech', highlight: 'Stack', subtitle: 'Tools, languages, and technologies I work with daily.', clickDetails: 'Click for details',
      categories: {
        Frontend: "Frontend", Backend: "Backend", Data: "Data & ETL", Desktop: "Desktop & Realtime", Tools: "Tools"
      },
      items: {
        "React 18": "Building interactive user interfaces, such as the AI Digital Assistant and ETL dashboards.",
        "Angular 17-20": "Development of modular enterprise portals, like the Corporate User Portal for interactive user management.",
        "TypeScript": "Static typing on frontend and backend (Node) to ensure scalability and code quality.",
        "JavaScript": "Dynamic development, browser API integration, and complex validation scripts.",
        "HTML": "Semantic and accessible markup for various web applications.",
        "CSS": "Advanced styling with CSS variables, grid/flexbox, and keyframe animations.",
        "Tailwind": "Agile utility styling, heavily used in my projects to achieve responsive and modern designs.",
        "Material UI": "Creating standardized interfaces in enterprise web applications.",
        "PrimeNG": "Implementation of advanced tables and components in Angular.",
        "Python": "Business logic, heavy data processing (ETL), and AI integrations (Gemini, OpenAI).",
        "FastAPI": "Development of high-performance, asynchronous RESTful APIs for web sockets.",
        "Django": "Monolithic applications and robust systems with built-in administration and ORM.",
        "Node.js": "Backend services and server-side JavaScript automations.",
        "PHP (Laravel)": "Structured backend development, migrations, controllers, and APIs.",
        ".NET": "Integration in enterprise ecosystems for material tracking and billing.",
        "PostgreSQL": "Relational database management for critical services and scalable systems.",
        "SQL Server": "High-performance enterprise database management and Microsoft ecosystem integration.",
        "MySQL": "Implementation of agile databases for transactional applications.",
        "MongoDB": "NoSQL storage for event persistence, logs, and unstructured data.",
        "Pandas": "Data transformation, cleaning, and reporting integrated into the Python ETL flow.",
        "Electron": "Cross-platform support for apps like ETL Tools, merging web tech with the OS environment.",
        "PyQt5": "Building native desktop apps like Secure Kiosk and hardware/UI control.",
        "WebSockets": "Low-latency bidirectional communication for voice assistants and real-time monitoring.",
        "Docker": "Service containerization, orchestrating development environments and predictable deployments.",
        "Azure DevOps": "Repository management, CI/CD pipelines, and agile boards for task control.",
        "Git": "Source code versioning and collaboration through branches.",
        "Postman": "REST endpoint testing, API design, and interactive documentation."
      }
    },
    projects: {
      title: 'Featured', highlight: 'Projects', subtitle: 'A selection of my most recent and relevant work.', all: 'All', viewCode: 'Code', viewDemo: 'Demo', close: 'Close project details',
      items: {
        "AvanzaEmpleo": { desc: "Job platform with modules for candidates, companies, and job offer administration.", long: "Developed full-stack features in React and Python. Implemented login, password recovery, user registration, offer creation/editing, search, and filtering. Improved candidate and company profiles with image uploads and dynamic fields." },
        "Automatización Logística": { desc: "Modular desktop system automating address normalization with AI (Gemini API), geocoding, and zone assignment.", long: "Developed a Python desktop system to process logistics batches from Excel. Integrates Gemini API, Geocoding API, and SQLite. Automates tasks by eliminating rework with caching and rule engines, segmenting addresses by zones." },
        "Asistente Digital AI": { desc: "AI Application (React + Python/FastAPI + OpenAI) with voice context, audio sending/synthesis, and interpretative avatar.", long: "Frontend architecture in React, backend in Python/FastAPI. Integration with OpenAI and WebSockets for real-time processing. Handled audio, real-time response synthesis, and rendering of an interactive avatar with D-ID." },
        "Kiosko Seguro": { desc: "Interactive desktop app limiting URL access and reporting activity to the backend in real-time.", long: "Desktop application developed in PyQt5 equipped with WebSockets and a Python backend. Designed to operate in kiosk mode, it limits access only to pre-established URLs and constantly reports user activity." },
        "Smart Energy": { desc: "Log change detection service via Python Watchdog processing and sending events to a reporting dashboard.", long: "Service implemented in Python using Watchdog to monitor local log files. Processes and categorizes events in real-time for visualization on a dashboard built with React." },
        "ETL Tools": { desc: "Desktop UI without a backend for ETL processes and automation, featuring server status and MongoDB visualization.", long: "Desktop application with React and Electron guided by Python scripts for loading and replacing ETL files. Facilitates server status observation and MongoDB database monitoring." },
        "Corporate User Portal": { desc: "Frontend for enterprise user management portal and dynamic role assignment in the organization.", long: "Enterprise modules developed alongside Angular and a .NET backend. Provides interactive interfaces to manage users and multiple roles, allowing robust access control throughout the organization." },
        "Clientes Interactivos & Balanceados": { desc: "Distributed systems for tracking shipment status, material entry management, transformation, and product output.", long: "Integrated systems developed with Angular and .NET. Act as a crucial logistics point for managing merchandise, recording inventory changes, managing transformation batches, and conducting detailed tracking." }
      }
    },
    experience: {
      title: 'Experience', highlight: '& Education', subtitle: 'My professional and academic evolution over time.',
      items: {
        "Tecnología en Sistemas de Información": { role: "Information Systems Technology", period: "2016 – 2021 | Palmira, Colombia", desc: "Completed academic program focused on software engineering and programming." },
        "Soporte TI / Desarrollador Jr.": { role: "IT Support / Jr. Developer", period: "2020 – 2021 | Cali, Colombia", desc: "Maintenance of servers, equipment, and websites; comprehensive tech support for corporate users, and DB management (PostgreSQL, MySQL, MongoDB)." },
        "Desarrollador de Software": { role: "Software Developer", period: "Nov 2021 – May 2026 | Cali, Colombia", desc: "Frontend and backend development for web and desktop apps. Integration of OpenAI API, WebSockets. Design of performant UI components, ETL pipelines, and deployment using Docker." },
        "Desarrollador Full Stack Freelance": { role: "Freelance Full Stack Developer", period: "2024 | Remote, Colombia", desc: "Job Platform: Implemented frontend modules in React and backend in Python. Developed authentication, profiles, search, and job offer management." },
        "Certificaciones Destacadas": { role: "Notable Certifications", period: "2025 - 2026", desc: "Claude Code, Prompt Engineering, n8n Automations, AI for Devs, Frontend Developer, REST API with JS." },
        "Ingeniería en Sistemas": { role: "Systems Engineering", period: "2024 – Present | Virtual, Colombia", desc: "Active student, foundation in software architecture and advanced algorithms." }
      }
    },
    contact: {
      title: 'Contact', subtitle: 'Have a project in mind or looking for a Full Stack developer? Let\'s talk.', name: 'Name', email: 'Email', message: 'Message', send: 'Send Message', sending: 'Sending...', success: 'Message sent successfully!', error: 'There was an error sending the message. Please try again.'
    }
  }
};
