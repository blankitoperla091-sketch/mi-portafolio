# Portafolio Full-Stack - Juan Carlos Alcántara Custodio

Este proyecto es un portafolio personal con una identidad visual renovada, una narrativa fuerte y una pequeña API en FastAPI para dar una capa real de Full-Stack.

## Tecnologías
- Frontend: HTML, CSS, JavaScript
- Backend: Python + FastAPI
- Servidor API: Uvicorn

## Estructura del proyecto
- `frontend/` → HTML, CSS y JavaScript del sitio
- `backend/` → lógica del backend y dependencias
- `data/` → datos del perfil y contenido dinámico

## Ejecutar localmente

1. Crear entorno virtual:
   ```bash
   python -m venv .venv
   .venv\Scripts\activate
   ```

2. Instalar dependencias:
   ```bash
   python -m pip install -r backend/requirements.txt
   ```

3. Ejecutar backend desde la raíz:
   ```bash
   python -m uvicorn backend.backend:app --reload --host 127.0.0.1 --port 60734
   ```

4. Abrir el frontend en tu navegador:
   - http://127.0.0.1:60734

## Subir a GitHub

1. Inicializa Git:
   ```bash
   git init
   ```

2. Agrega los archivos:
   ```bash
   git add .
   ```

3. Haz el primer commit:
   ```bash
   git commit -m "Primer versión del portafolio full-stack"
   ```

4. Crea el repositorio en GitHub y conecta el remoto:
   ```bash
   git remote add origin <tu-url-de-github>
   ```

5. Sube el proyecto:
   ```bash
   git push -u origin master
   ```

## Nota
La ruta del backend y del frontend ya quedó organizada para que el proyecto sea más claro, ordenado y fácil de mantener.
