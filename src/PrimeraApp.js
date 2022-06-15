/*
    Componentes en React:
    Existen dos tipos de componentes:
        1. Los que están basados en clases.
        2. Los que están basados en funciones.
 
    Se trabajará principalmente con componentes basados en funciones por que React de esta forma empuja a que se ejecute el código.
 
    Generalmente si queremos retornar mas de una etiqueta se trendría que encapsular en un div pero pues esto no es siempre necesario, depende del desarrollador. Existe otra alternativa, el fragment.
 
    Se puede hacer con la etiqueta <Fragment></Fragment> pero ocupa la importación. Por otra parte se puede hacer solamente utilizando las etiquetas vacias sin importación <></>.
*/

import React from "react";
import PropTypes from "prop-types";


const PrimeraApp = ({saludo, subtitulo}) => {
return (
    <div> 
        <h1> {saludo} </h1> 
    <p>{ subtitulo}</p>
    </div>
);
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
subtitulo = 'soy un subtitulo';
}

export default PrimeraApp;