import { useState } from 'react';
import {Grid} from '@mui/material'; 
import {TextField} from '@mui/material';
import {Select, MenuItem} from '@mui/material';
import { Button } from '@mui/material';
import {Typography} from '@mui/material';

function Formulario(props){

    const [anio, setAnio] = useState("");
    const [mes, setMes] = useState("01");
    const [dia, setDia] = useState("");

    const calcularDatos = async (e) => {
        e.preventDefault();
        let auxDia = dia<10 ? "0"+dia : dia;
        let fechaN = anio+"-"+mes+"-"+auxDia;
        let url = "http://127.0.0.1:8000/datos/"+fechaN;
        const res = await fetch(url);
        const datosRespuesta = await res.json();
        console.log(datosRespuesta["fecha"]);
        await props.guardarDatos(datosRespuesta);
        await props.modificarEstado(1);
      }

    return (
        <>
        <hr/>
        <h1>Cuahpohualli</h1>
        <hr/>
        <h2>Introduzca su fecha de nacimiento:</h2>
        <form onSubmit={calcularDatos}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
           <label htmlFor="campoAnio">Año:</label>
          </Grid>
          <Grid item>
           <TextField type="number" id="campoAnio" InputProps={{ inputProps:{min:1500}}} placeholder="Año de naciemiento" required onChange={(e) => setAnio(e.target.value)}/>
          </Grid>
         </Grid>
         <br/>
         <br/>
         <Grid container alignItems="center" justifyContent="center">
          <Grid item>
           <label htmlFor="campoMes">Mes:</label>
          </Grid>
          <Grid item>
           <Select id="campoMes" label="mes" value={mes} required onChange={(e) => setMes(e.target.value)}>
            <MenuItem value={"01"}>Enero</MenuItem>
            <MenuItem value={"02"}>Febrero</MenuItem>
            <MenuItem value={"03"}>Marzo</MenuItem>
            <MenuItem value={"04"}>Abril</MenuItem>
            <MenuItem value={"05"}>Mayo</MenuItem>
            <MenuItem value={"06"}>Junio</MenuItem>
            <MenuItem value={"07"}>Julio</MenuItem>
            <MenuItem value={"08"}>Agosto</MenuItem>
            <MenuItem value={"09"}>Septiembre</MenuItem>
            <MenuItem value={"10"}>Octubre</MenuItem>
            <MenuItem value={"11"}>Noviembre</MenuItem>
            <MenuItem value={"12"}>Diciembre</MenuItem>
           </Select>
         </Grid>
         </Grid>
         <br/>
         <br/>
         <Grid container alignItems="center" justifyContent="center">
          <Grid item>
           <label htmlFor="campoAnio">Dia:</label>
          </Grid>
          <Grid item>
           <TextField type="number" id="campoDia" InputProps={{ inputProps:{ min:1,max:31}}} placeholder="Dia" required  onChange={(e) => setDia(e.target.value)}/>
          </Grid>
         </Grid>
         <br/>
         <br/>
         <hr/>
         <Button type="submit" variant="contained" size="medium" sx={{py:"0.9em"}}> <Typography  sx={{fontWeight:'bold'}}>Confirmar</Typography></Button>
        </form>
   
       </>
       );
}

export default Formulario;