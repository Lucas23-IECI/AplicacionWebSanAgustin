# Sistema de Control de Comedores — Colegio San Agustín Concepción

Sistema web para la gestión integral del servicio de alimentación y control de almuerzos para estudiantes del Colegio San Agustín de Concepción.

## Sobre el Proyecto

Este proyecto nace de la necesidad del colegio de digitalizar el control de comedores, reemplazando el registro manual actual por un sistema automatizado basado en tarjetas QR.

**Contexto importante:** En Chile, los celulares están prohibidos en establecimientos educativos, por lo que el sistema opera con tarjetas físicas con códigos QR por estudiante y lectores QR en el comedor.

## Tecnologías

- **Framework:** [Next.js](https://nextjs.org/) 15+ con App Router
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4
- **Base de datos:** Por definir (Prisma ORM)
- **Despliegue:** Por definir

## Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/Lucas23-IECI/AplicacionWebSanAgustin.git
cd AplicacionWebSanAgustin

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del Proyecto

```
src/
├── app/                  → Páginas y rutas (App Router)
│   ├── dashboard/        → Panel de control administrativo
│   │   ├── estudiantes/  → Gestión de estudiantes
│   │   ├── registro/     → Registro diario de almuerzos
│   │   └── reportes/     → Reportes y estadísticas
│   └── page.tsx          → Página principal
├── components/           → Componentes reutilizables
├── lib/                  → Utilidades y configuración
└── types/                → Definiciones de tipos TypeScript
```

## Flujo de Git

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para la guía completa de contribución y convenciones.

**Ramas principales:**
- `main` → Producción
- `develop` → Desarrollo

**Crear una nueva funcionalidad:**
```bash
git checkout develop
git pull origin develop
git checkout -b feat/nombre-funcionalidad
# ... trabajar ...
git push origin feat/nombre-funcionalidad
# Crear PR en GitHub
```

## Enlaces del Colegio

- **Sitio web:** [csac.cl](https://csac.cl/)
- **Instagram:** [@sanagustin_concepcion](https://www.instagram.com/sanagustin_concepcion/)

## Equipo

Proyecto de Práctica 2 — Ingeniería de Ejecución en Computación e Informática

## Licencia

Proyecto privado — Colegio San Agustín Concepción.
