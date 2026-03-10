# Guía de Contribución

## Flujo de Trabajo con Git

### Ramas Principales

| Rama | Propósito |
|------|-----------|
| `main` | Producción — solo código estable y revisado |
| `develop` | Desarrollo — rama de integración de features |

### Ramas de Trabajo

Todas las ramas de trabajo se crean desde `develop` y se fusionan de vuelta a `develop` mediante Pull Request.

**Nomenclatura de ramas:**

```
feat/nombre-descriptivo     → Nueva funcionalidad
fix/nombre-descriptivo      → Corrección de bug
style/nombre-descriptivo    → Cambios de UI/estilos
refactor/nombre-descriptivo → Refactorización de código
docs/nombre-descriptivo     → Documentación
chore/nombre-descriptivo    → Configuración, dependencias, etc.
```

**Ejemplos:**
```
feat/registro-qr-estudiantes
fix/validacion-formulario-almuerzo
style/rediseno-dashboard
docs/manual-usuario
```

### Flujo Paso a Paso

1. **Crear rama desde develop:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feat/mi-nueva-funcionalidad
   ```

2. **Hacer commits con mensajes claros (en español):**
   ```bash
   git add .
   git commit -m "feat: agregar formulario de registro de estudiantes"
   ```

3. **Subir la rama:**
   ```bash
   git push origin feat/mi-nueva-funcionalidad
   ```

4. **Crear Pull Request en GitHub:**
   - Base: `develop`
   - Completar la plantilla del PR
   - Asignar revisores

5. **Después de la revisión y aprobación:**
   - Se fusiona a `develop`
   - Eliminar la rama de trabajo

### Convención de Commits

Usamos el formato de [Conventional Commits](https://www.conventionalcommits.org/) en español:

```
tipo: descripción breve en español

Cuerpo opcional con más detalle.
```

**Tipos permitidos:**

| Tipo | Descripción |
|------|-------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de error |
| `style` | Cambios de estilos (CSS, UI) |
| `refactor` | Refactorización sin cambiar funcionalidad |
| `docs` | Cambios en documentación |
| `chore` | Tareas de mantenimiento |
| `test` | Agregar o modificar tests |

---

## Configuración del Proyecto

### Requisitos

- Node.js 20+
- npm 10+

### Instalación

```bash
git clone https://github.com/Lucas23-IECI/AplicacionWebSanAgustin.git
cd AplicacionWebSanAgustin
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

### Compilar para producción

```bash
npm run build
```

### Ejecutar linter

```bash
npm run lint
```

---

## Reglas del Proyecto

1. **Todo en español:** Comentarios, variables descriptivas, commits, documentación
2. **Respetar el flujo de Git:** No hacer push directo a `main` ni `develop`
3. **Hacer PRs pequeños:** Un PR por funcionalidad o corrección
4. **Revisar antes de fusionar:** Al menos 1 aprobación antes de merge
5. **Mantener el código limpio:** Pasar lint antes de subir cambios
