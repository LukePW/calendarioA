import {Stack, Box, Button, Divider} from '@mui/material'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CuadroDatos(props){
    return(
        <>
         <hr/>
         <h2>Informacion para la fecha insertada </h2>
         <hr/>
         <Stack spacing={3}>
         <h3>Fecha de nacimiento: <span>{props.datosUsuario["fecha"]}</span></h3>
         <Stack direction="row" spacing={0.5} justifyContent="space-around" divider={<Divider orientation='vertical' flexItem/>}>
          <Box><span className="etiqueta">Año:</span> <span className="contenido">{props.datosUsuario["signo"]}</span> </Box> 
          <Box><span className="etiqueta">Numeral: </span> <span className="contenido">{props.datosUsuario["numeral"]}</span></Box>
         </Stack>
          <Box> <span className="etiqueta"> Mes: </span> <span className="contenido"> {props.datosUsuario["veintena"]} </span> </Box>
          <Box> <span className="etiqueta"> Dia: </span> <span className="contenido"> {props.datosUsuario["dia"]} </span></Box>
         </Stack>
         <hr/>
         <Button variant="contained" startIcon={<ArrowBackIcon />} size="large" color="success" sx={{py:"0.9em", mt:"1em", fontWeight:'bold'}} onClick={() =>props.modificarEstado(0)}> Regresar </Button>
        </>
    );

}

export default CuadroDatos;