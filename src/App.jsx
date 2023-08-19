import { useState } from 'react';
import { Typography } from '@mui/material';
import CuadroFormulario from "./paginas/CuadroFormulario";
import CuadroDatos from "./paginas/CuadroDatos";
import './App.css';


function App() {
  const [estado, setEstado] = useState(0);
  const [datos, setDatos] = useState({});

  return (
    <>
    {estado==1 ? <CuadroDatos datosUsuario={datos} modificarEstado={setEstado}/>:<CuadroFormulario modificarEstado={setEstado} guardarDatos={setDatos} />}
    
    </>

    );
}

export default App;
