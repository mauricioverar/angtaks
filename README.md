# 📝 Gestor de Tareas en Angular

Aplicación de tareas desarrollada con **Angular standalone components**, centrada en simplicidad, modularidad y estilo. Permite crear, completar y eliminar tareas, con una estructura clara, visualmente diferenciada y fácil de extender.


## 🚀 Características

- 📌 Componentes standalone (`TaskForm`, `TaskList`, `HomeComponent`)
- ✅ Crear, completar y eliminar tareas con casilla de verificación
- 🔍 Descripción desplegable al hacer clic en el título
- 🧠 Modelo `Task` con tipado TypeScript y propiedades dinámicas (`showDescription`, `completed`)
- 💅 Estilos SCSS con prioridad visual (`baja`, `media`, `alta`) y estado completado
- 🧩 Arquitectura modular, trazable y lista para escalar
- 🧪 Suite de tests unitarios con cobertura total (`100%`) en componentes y servicios
- 📊 Métricas de cobertura integradas con `karma-coverage`


## 📛 Badge de cobertura

![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)

> Integré métricas de cobertura con `karma-coverage` y alcancé el **100%** en _statements_, _branches_, _functions_ y _lines_. 


## 🛠️ Tecnologías

- [Angular 17+](https://angular.io/)
- TypeScript
- SCSS
- Standalone Components
- Angular CLI
- Karma + Jasmine (testing)


## 📦 Instalación

```bash
git clone https://github.com/mauricioverar/angtaks.git
cd angtaks
npm install
ng serve
```

Abre `http://localhost:4200` en tu navegador para ver la app en funcionamiento.


## 🧩 Estructura principal

```bash
task/
├── components/
│   ├── task-form/
│   └── task-list/
├── models/
│   └── task.model.ts
├── pages/
│   └── home/
│       ├── home.ts
│       ├── home.html
│       └── home.scss
├── services/
│   └── task-storage.ts
```


## 🧪 Suite de Tests

La aplicación incluye pruebas unitarias para validar lógica, interacción y persistencia. Cobertura total (`100%`) en todos los módulos:

| Módulo         | Statements | Branches | Functions | Lines |
|----------------|------------|----------|-----------|-------|
| `TaskForm`      | ✅ 100%     | ✅ 100%   | ✅ 100%    | ✅ 100% |
| `TaskList`      | ✅ 100%     | ✅ 100%   | ✅ 100%    | ✅ 100% |
| `HomeComponent` | ✅ 100%     | ✅ 100%   | ✅ 100%    | ✅ 100% |
| `TaskStorage`   | ✅ 100%     | ✅ 100%   | ✅ 100%    | ✅ 100% |

### 🔍 Casos cubiertos

- `TaskForm`: validación reactiva, emisión de eventos, control de errores
- `TaskList`: renderizado, clases condicionales, interacción con checkbox y botón de eliminar
- `HomeComponent`: renderizado condicional, lógica de agregar, alternar y eliminar tareas
- `TaskStorage`: persistencia en `localStorage`, recuperación y manejo de datos vacíos

Ejecuta los tests con:

```bash
ng test --code-coverage
```

Abre el reporte en `coverage/index.html`.


## 🌱 Próximas mejoras

- Filtros por estado de tarea
- Persistencia con IndexedDB
- Animaciones con Angular Animations
- Componente `TaskItem` para modularizar cada tarea
- Integración con CI/CD


## 👨‍💻 Autor

Desarrollado por [**Mauricio Vera**](https://github.com/mauricioverar), especialista en QA Automation y fullstack, apasionado por la trazabilidad técnica, la validación visual y la arquitectura modular con Angular + TypeScript. Enfocado en soluciones defendibles, escalables y orientadas a experiencia de usuario.
