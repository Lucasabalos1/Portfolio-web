---
title: "ApptitudIA"
description: "Sistema inteligente de gestión de reclutamiento que utiliza IA para clasificar y rankear candidatos."
tags: ["Python", "Scikit-Learn", "Javascript", "Sqlite3"]
image: "/Images/Projects/ApptitudIA/Dashboard.jpg"
link: "https://disponibilizacionweb.onrender.com/"
code: "https://github.com/Bianciotto/ApptitudAI/tree/main"
gallery: ["/Images/Projects/ApptitudIA/Dashboard.jpg", "/Images/Projects/ApptitudIA/Login.jpg", "/Images/Projects/ApptitudIA/Crear-oferta.jpg", "/Images/Projects/ApptitudIA/Ver-ofertas.jpg", "/Images/Projects/ApptitudIA/Cargar-oferta.jpg", "/Images/Projects/ApptitudIA/Postulantes.jpg" ,"/Images/Projects/ApptitudIA/Etiquetas.jpg" ,"/Images/Projects/ApptitudIA/Metricas.jpg"]
---

## Sobre el proyecto
Este fue mi proyecto de fin de carrera, donde con mi grupo de trabajo desarrollamos un sistema para automatizar la gestión de Recursos Humanos. El flujo consistía en la creación de ofertas laborales y la configuración de habilidades (etiquetas) requeridas.

Una vez que se cierra la oferta, un algoritmo de **Árbol de Decisión** categoriza a los postulantes como "Apto" o "No Apto" según las etiquetas configuradas. Tras este proceso, el sistema envía automáticamente una notificación por correo electrónico a cada candidato con el resultado de su evaluación.

### Mi participación
Mi responsabilidad principal en el equipo fue asegurar que el sistema funcionara correctamente antes de cada entrega:

- **Rol Principal (Testing):** Fui el encargado de calidad (QA). Diseñé y ejecuté pruebas funcionales, verifiqué casos de uso y gestioné el reporte de errores (bugs) para garantizar que los requisitos se cumplieran.
- **Frontend:** Tuve una participación secundaria encargándome de tareas puntuales en la interfaz utilizando HTML, CSS y JavaScript.

### Tecnologías utilizadas
- **Python** como lenguaje para el backend.
- **Scikit-Learn** Biblioteca fundamental utilizada para implementar el algoritmo de Árbol de Decisión encargado de la evaluación predictiva de candidatos
- **Javascript** como lenguaje para el frontend.
- **Sqlite3** como base de datos

### Módulos del sistema
- **Autenticación:** Gestión de acceso para reclutadores y postulantes.
- **Gestión de CVs:** Carga y procesamiento de currículums en formato PDF y DOCX.
- **Evaluación Predictiva:** Clasificación automática mediante IA tras el cierre de vacantes.
- **Métricas:** Panel visual con estadísticas sobre el proceso de selección.