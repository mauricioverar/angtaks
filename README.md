
# 📝 Gestor de Tareas en Angular

Una aplicación de tareas desarrollada con **Angular standalone components**, centrada en simplicidad, modularidad y estilo. Permite crear, completar y eliminar tareas, con una estructura clara y fácil de extender.

## 🚀 Características

- 📌 Componentes standalone (`TaskForm`, `TaskList`, `HomeComponent`)
- ✅ Crear, completar y eliminar tareas
- 🧠 Modelo `Task` con tipado TypeScript
- 💅 Estilos personalizados con SCSS
- 🧩 Arquitectura modular y reutilizable

## 🛠️ Tecnologías

- [Angular 17+](https://angular.io/)
- TypeScript
- SCSS
- Standalone Components
- Angular CLI

## 📦 Instalación

```bash
git clone https://github.com/mauricioverar/angular-task-manager.git
cd angular-task-manager
npm install
ng serve
```

Abre `http://localhost:4200` en tu navegador para ver la app en funcionamiento.

## 🧩 Estructura principal

```bash
src/
├── components/
│   ├── task-form/
│   └── task-list/
├── models/
│   └── task.model.ts
├── pages/
│   └── home/
│       ├── home.component.ts
│       ├── home.html
│       └── home.scss
```

## 🌱 Próximas mejoras (ideas)

- Filtros por estado de tarea
- Persistencia con `localStorage` o IndexedDB
- Animaciones con Angular Animations
- Tests con Karma/Jasmine

## 👨‍💻 Autor

Desarrollado por [**Mauricio**](https://github.com/mauricioverar), apasionado por el desarrollo web funcional y elegante usando Angular + TypeScript.
