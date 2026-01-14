---
title: "Tp Final Sor 2"
description: "Sistema Híbrido de Detección de Intrusiones basado en Redes Neuronales LSTM e integrado al Kernel de Linux."
tags: ["Python", "TensorFlow", "Linux", "React"]
image: "/Images/Projects/IDS/Dashboard.jpg"
code: "https://github.com/Lucasabalos1/Tp-final-sor-2"
gallery: ["/Images/Projects/IDS/Dashboard.jpg", "/Images/Projects/IDS/Alerts.jpg", "/Images/Projects/IDS/Metricas.jpg", "/Images/Projects/IDS/VM.jpg"] 
---

## Sobre el proyecto
Este proyecto es mi Trabajo Final de la materia sistemas operativos y redes 2, donde desarrollé un sistema avanzado de seguridad informática capaz de identificar ataques de red en tiempo real. A diferencia de los firewalls tradicionales, este sistema utiliza Inteligencia Artificial para detectar patrones de ataques desconocidos (*Zero-Day*).

La solución integra el procesamiento de datos a bajo nivel (Kernel de Linux) con un modelo de aprendizaje profundo, logrando una precisión del 99.73% en la clasificación de tráfico malicioso.

### Características principales
- **Detección con IA:** Implementación de una Red Neuronal Recurrente (LSTM) que analiza el tráfico como secuencias temporales para detectar anomalías complejas.
- **Integración con Kernel:** Uso de Netfilter y NFQueue para capturar y analizar paquetes directamente desde el flujo de red del sistema operativo.
- **Mitigación Activa:** Capacidad de ejecutar reglas de bloqueo automáticas mediante Iptables ante la detección de amenazas confirmadas.
- **Dashboard en Tiempo Real:** Interfaz web para monitorear el estado de la red, visualizar alertas y gestionar el historial de bloqueos.
- **Análisis de Características:** Procesamiento de 43 métricas de red (IP, puertos, protocolos, flags) para una clasificación precisa.

### Tecnologías utilizadas
- **Python (TensorFlow/Keras):** Desarrollo, entrenamiento y exportación del modelo de Deep Learning.
- **Python (Netfilter):** Intercepción de tráfico y comunicación con las colas del Kernel de Linux.
- **React & Flask:** Stack utilizado para la creación del panel de control y la API de monitoreo.
- **Pandas & Scikit-learn:** Preprocesamiento de datos y Feature Engineering del dataset UNSW-NB15.