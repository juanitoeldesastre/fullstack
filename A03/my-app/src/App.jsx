import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './components/Titulo'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio'; 
import Contacto from './pages/Contacto';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter> 
      <nav> 
        <Link to="/">Inicio</Link> | <Link to="/contacto">Contacto</Link> 
      </nav> 
      <Routes> 
        <Route path="/" element={<Inicio />} /> 
        <Route path="/contacto" element={<Contacto />} /> 
      </Routes> 
    </BrowserRouter>
     <Titulo texto="Bienvenido a React + TypeScript" /> 
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
