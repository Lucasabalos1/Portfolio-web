---
title: "BodyFlow"
description: "Sistema de gestión integral para gimnasios. Permite administrar socios, empleados, ejercicios y rutinas de entrenamiento, con asignación de rutinas, seguimiento de vencimientos y análisis del negocio a través de métricas."
tags: ["React", "Typescript", "Python", "Flask", "Sqlite3"]
image: "/Images/Projects/Bodyflow/Dashboard.png"
link: "https://body-flow-beta.vercel.app/"
code: "https://github.com/Lucasabalos1/BodyFlow"
gallery: ["/Images/Projects/Bodyflow/Dashboard.png", "/Images/Projects/Bodyflow/Login.png", "/Images/Projects/Bodyflow/Cliente_Lista.png", "/Images/Projects/Bodyflow/Crear_rutina.png", "/Images/Projects/Bodyflow/Ejercicioos.png", "/Images/Projects/Bodyflow/Empleados.png", "/Images/Projects/Bodyflow/Ficha_Socio.png", "/Images/Projects/Bodyflow/Gestion_Rutinas.png", "/Images/Projects/Bodyflow/Listado_Rutinas.png", "/Images/Projects/Bodyflow/Metricas.png", "/Images/Projects/Bodyflow/Navbar.png", "/Images/Projects/Bodyflow/Notificaciones.png", "/Images/Projects/Bodyflow/Seleccioonar_ejercicios.png"]
---

## Sobre el proyecto
Sistema de gestión integral para gimnasios. Permite administrar **socios, empleados, ejercicios y rutinas de entrenamiento**, asignar rutinas a cada socio con su seguimiento de vencimiento y analizar el rendimiento del negocio a través de **métricas e indicadores**.

La aplicación está pensada para que la use cualquier persona sin conocimientos técnicos: en una sola pantalla se tiene todo el gimnasio bajo control, con dos perfiles de acceso diferenciados — **Administrador**, con acceso a todo el sistema, y **Empleado**, que gestiona socios, ejercicios, rutinas y métricas pero no el alta de empleados.

### Tecnologías utilizadas
- **React (React Router, Recharts, SweetAlert2)** como framework para el frontend.
- **TypeScript** como lenguaje para el frontend.
- **Flask (Flask-SQLAlchemy, Flask-JWT-Extended)** como framework para el backend.
- **Sqlite3** como base de datos.

### Características principales
- **Autenticación con roles:** inicio de sesión con contraseñas hasheadas y tokens JWT con expiración de 8 horas, con permisos diferenciados (`administrador` / `empleado`).
- **Gestión de empleados:** alta, edición y baja con asignación de rol.
- **Gestión de clientes:** registro, edición y eliminación con búsqueda por DNI.
- **Gestión de ejercicios:** biblioteca por grupo muscular, con descripción y URL de video.
- **Gestión de rutinas:** creación con objetivo, género objetivo, días y ejercicios por día (series, repeticiones, descanso); asignación a clientes con reemplazo y fecha de vencimiento.
- **Ficha del socio:** detalle con estado de rutina **vigente / vencido** y acceso mediante **código QR**.
- **Notificaciones:** endpoint que devuelve las rutinas vencidas para renovarlas a tiempo.
- **Métricas y gráficos:** totales de clientes, rutinas asignadas por mes, distribución por objetivo y top de ejercicios.
- **Interfaz moderna y responsive** con notificaciones amigables (**SweetAlert2**).