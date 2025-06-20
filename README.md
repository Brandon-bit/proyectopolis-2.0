# PROYECTOPOLIS 2.0 (React + TypeScript + Vite)

# 1.- Ejecuta la aplicacion web:
Es importante tener "Type": "module" en el package.json

Para ejecutar la aplicación se tiene que ejecutar el siguiente script en la terminal:
- npm run dev

# 2.- Crear el build de la app
Es importante tener "Type": "module" en el package.json
Esto nos permitira crear los archivos necesarios para ejecutar las pruebas en la aplicacion desktop

Para crear el build de la aplicación se ejecuta el siguiente script:
- npm run build

Esto genera la carpeta "dist-electron" que contiene el archivon main.js que usa electron para generar la app de escritorio, el archivo html que se genera se guarda en la carpeta dist, el css y el js se guardan en la carpeta dist/assets

# 3.- Correr prueba de escritorio
Es importante retirar la propiedad "Type": "module" en el package.json ya que electron funciona con common js y antes de ejecutar la prueba es necesario haber ejecutado el build de la aplicación

Para ejecutar la prueba se usa el siguiente script:
- npm run start

# 4.- Obtener el instalador de la app desktop
Es importante retirar la propiedad "Type": "module" en el package.json ya que electron funciona con common js y antes de obtener el instalador es necesario haber ejecutado el build de la aplicación

Para obtener el instalador se usa el siguiente script:
- npm run build-electron

Esto generara una carpeta "release" donde se encontrara el instalador

# 5.- Estructura de carpetas
PROYECTOPOLIS-2.0/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   │       ├── base/
│   │       ├── components/
│   │       └── layout/
│   │
│   ├── components/
│   │   ├── common/             // Componentes reutilizables en toda la aplicación
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.module.scss
│   │   │   ├── Input/
│   │   │   └── LoadingSpinner/
│   │   └── ui/                 // Componentes UI específicos (componentes shadcn)
│   │
│   ├── hooks/                  // Hooks personalizados y hooks de shadcn
│   │   ├── useAuth.ts
│   │   ├── useDebounce.ts
│   │   └── useForm.ts
│   │
│   ├── layouts/                // Plantillas para los usuarios con y sin sesión iniciada
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── utils/
│   │
│   ├── modules/                // ¡Aquí está el corazón de tus módulos!
│   │   ├── Auth/               // Módulo de autenticación (login, registro, etc.)
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   │   ├── LoginPage.tsx
│   │   │   │   └── RegisterPage.tsx
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── AuthRoutes.tsx  // Rutas específicas del módulo de autenticación
│   │   │
│   │   ├── Projects/           // Módulo de gestión de proyectos
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   │   ├── ProjectListPage.tsx
│   │   │   │   └── ProjectDetailsPage.tsx
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── ProjectRoutes.tsx
│   │   │
│   │   ├── Investments/        // Módulo de inversiones
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── InvestmentRoutes.tsx
│   │   │
│   │   ├── Marketing/          // Módulo de marketing
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── types/
│   │   │   └── MarketingRoutes.tsx
│   │   │
│   │   └── Processes/          // Módulo de procesos
│   │       ├── components/
│   │       ├── pages/
│   │       ├── hooks/
│   │       ├── services/
│   │       ├── types/
│   │       └── ProcessRoutes.tsx
│   │
│   ├── pages/                  // Páginas generales (ej. Home, Dashboard)
│   │   ├── HomePage.tsx
│   │   └── DashboardPage.tsx
│   │
│   ├── routes/
│   │   ├── AppRouter.tsx       // Contiene la lógica de enrutamiento principal (react-router-dom)
│   │   ├── PrivateRoutes.tsx   // Rutas protegidas
│   │   └── PublicRoutes.tsx    // Rutas públicas
│   │
│   ├── services/               // Lógica de consumo de APIs (ej. AuthService.ts, ProjectService.ts)
│   │   ├── api.ts              // Instancia de axios o fetch común
│   │   └── index.ts            // Exporta los servicios
│   │
│   ├── store/                  // Gestión de estado (ej. Redux, Zustand, Context API)
│   │   ├── reducers/
│   │   ├── actions/
│   │   ├── types/
│   │   └── index.ts
│   │
│   ├── types/                  // Definiciones de tipos globales (interfaces, enums)
│   │   ├── common.ts
│   │   └── user.ts
│   │
│   ├── utils/                  // Funciones de utilidad (formatters, validators)
│   │   ├── helpers.ts
│   │   └── validators.ts
│   │
│   ├── App.tsx                 // Componente raíz de la aplicación
│   ├── index.css               // Estilos globales, se importa tailwind y algunas configuraciones de shadcn
│   ├── main.tsx                // Punto de entrada de la aplicación
│   └── react-app-env.d.ts      // Tipos de ambiente para TypeScript
│
├── .env                        // Variables de entorno
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
