// Importa StrictMode desde React. Es una herramienta que ayuda a detectar problemas potenciales en la aplicación durante el desarrollo.
import { StrictMode } from 'react'

// Importa createRoot desde react-dom/client para renderizar la app en el DOM.
import { createRoot } from 'react-dom/client'

// Importa los estilos globales definidos en el archivo index.css.
import './index.css'

// Importa el componente principal de la aplicación.
import App from './App.jsx'

// Renderiza la aplicación en el elemento con id "root" del HTML.
// StrictMode envuelve a la App para ayudar a detectar problemas comunes en React.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
