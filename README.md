# Danbam - Sistema de Inventario y Ventas

Este sistema fue desarrollado con Django, completamente en español, para gestionar productos, ventas e inventario en la pyme gastronómica Danbam. Funciona en computador y celular gracias a su diseño web responsivo.

## Estructura del Repositorio

- `/core/` – Módulo principal de la aplicación: modelos de productos, ventas, usuarios.
- `/templates/` – Archivos HTML del sistema (vistas web).
- `/static/` – Archivos estáticos como Bootstrap y hojas de estilo CSS.
- `db.sqlite3` – Base de datos utilizada durante el desarrollo.
- `README.md` – Documento principal de instrucciones y guía de instalación.
- `requirements.txt` – Archivo con las dependencias necesarias.

## Requisitos técnicos

- Python 3.11 o superior
- pip (instalador de paquetes)
- Virtualenv (opcional pero recomendado)

## Pasos de instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/danbam-gestion.git
   cd danbam-gestion
   ```

2. Crear y activar un entorno virtual:
   ```bash
   python -m venv venv
   source venv/bin/activate        # En Windows: venv\Scripts\activate
   ```

3. Instalar dependencias:
   ```bash
   pip install -r requirements.txt
   ```

4. Ejecutar migraciones:
   ```bash
   python manage.py migrate
   ```

5. Crear un superusuario:
   ```bash
   python manage.py createsuperuser
   ```

6. Iniciar el servidor:
   ```bash
   python manage.py runserver
   ```

7. Acceder al sistema:
   - Desde navegador: `http://127.0.0.1:8000`
   - En celular conectado a la misma red: `http://<IP-de-tu-PC>:8000`
