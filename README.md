🦄 Refactor y Extensión del Módulo de Unicornios + Nuevo Módulo de Productos
📋 Descripción
Este proyecto consiste en la refactorización del módulo original de Unicornios y la creación de un nuevo módulo independiente de Productos, aplicando buenas prácticas de arquitectura en React.
El objetivo es construir una aplicación modular, escalable y organizada, utilizando Context API, Formik, Yup, React Router DOM, Axios y localStorage.

🚀 Tecnologías Utilizadas
React (Vite / Create React App)

React Router DOM para ruteo

Context API para gestión de estado global (unicornios)

Formik + Yup para validaciones de formularios

Axios para comunicación con API REST

LocalStorage para persistencia de datos locales (productos)

🧩 Funcionalidades
Módulo de Unicornios
Ver listado de unicornios

Crear nuevo unicornio

Editar unicornio existente

Eliminar unicornio

Validaciones de formulario con Formik + Yup

Estado global gestionado con Context API

Módulo de Productos
Ver listado de productos

Agregar nuevo producto

Persistencia local con useState + localStorage

Módulo totalmente independiente de unicornios

🛤️ Rutas Principales

Ruta	Descripción
/unicornios	Vista principal de unicornios
/unicornios/crear	Formulario para crear un unicornio
/unicornios/editar/:id	Formulario para editar un unicornio
/productos	Vista principal de productos
⚙️ Instalación y Ejecución
Clona el repositorio:

bash
Copiar
Editar
git clone https://github.com/cuelloguille/PracticoCrud-api
Instala las dependencias:

bash
Copiar
Editar
npm install
Ejecuta la aplicación:

bash
Copiar
Editar
npm run dev
O si usas Create React App:

bash
Copiar
Editar
npm start
📝 Notas Adicionales
El módulo de Unicornios utiliza la API pública de crudcrud.com.

El módulo de Productos gestiona los datos de forma local mediante localStorage.

Opcionalmente, se pueden agregar mejoras de interfaz con PrimeReact y notificaciones visuales con Toasts.

📚 Autor
Guillermo Cuello
