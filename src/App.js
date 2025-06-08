// src/App.js
import React from 'react';
// Importa tu componente LoginSISOLV2
import LoginSISOLV2 from './components/login/LoginSISOLV2'; // Ajusta la ruta si es necesario, ej: './components/LoginSISOLV2';
import './App.css'; // Si tienes estilos globales en App.css que quieres mantener

function App() {
  return (
    <div className="App">
      {/* Renderiza tu componente LoginSISOLV2 */}
      <LoginSISOLV2 />
    </div>
  );
}

export default App;