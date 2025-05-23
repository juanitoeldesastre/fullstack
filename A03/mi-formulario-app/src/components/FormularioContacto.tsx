import { useState, type FormEvent } from 'react'; 
 
export default function FormularioContacto() { 
  const [nombrecompleto, setNombreCompleto] = useState(''); 
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [comentarios, setComentarios] = useState(''); 
  const [enviado, setEnviado] = useState(false); 
 
  const manejarEnvio = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    console.log(`Nombre Completo : ${nombrecompleto}, Correo : ${correo},
       Carrera: ${carrera}, Comentarios: ${comentarios}`);
    setEnviado(true); 
  }; 
  
return ( 
    <div> 
      <h2>Formulario de Contacto</h2> 
 
      {enviado && (
      <div style={{ marginTop: '10px', background: 'green', padding: '10px' }}> 
       <p>¡Gracias <strong>{nombrecompleto}</strong>!</p>
       <p>Hemos registrado tu correo: {correo}</p>
       <p>Carrera: {carrera}</p> 
       <p>TComentarios: {comentarios}</p> 
      </div>
      )}
      
      <form onSubmit={manejarEnvio}> 
        <div> 
          <label htmlFor="nombrecompleto">Nombre Completo:</label><br /> 
          <input 
            id="nombrecompleto" 
            type="text" 
            value={nombrecompleto} 
            onChange={(e) => setNombreCompleto(e.target.value)} 
            required 
          /> 
        </div> 
        <div> 
          <label htmlFor="correo">Correo Electrónico:</label><br /> 
          <input 
            id="correo" 
            type="email" 
            value={correo} 
            onChange={(e) => setCorreo(e.target.value)} 
            required 
          />
        </div>

        <div> 
          <label htmlFor="carrera">Carrera:</label><br /> 
          <input 
            id="carrera" 
            type="text" 
            value={carrera} 
            onChange={(e) => setCarrera(e.target.value)} 
            required 
          />
        </div>

        <div> 
          <label htmlFor="comentarios">Comentarios:</label><br /> 
          <textarea 
            id="mensaje" 
            value={comentarios} 
            onChange={(e) => setComentarios(e.target.value)} 
            required 
          /> 
        </div> 
        <button type="submit">Enviar</button> 
      </form> 
    </div> 
  ); 
}
