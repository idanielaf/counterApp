import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({value = 10}) =>{
const [counter, setCounter] = useState(value); // [que retorna dos valores]


    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter( (c) => c + 1);
    } 

    const handleReset = () => setCounter(value);
    const handleLess = () => setCounter( (c) => c - 1);

return(
    <div>
<h1> Aquí algo</h1>
 <h2> {counter} </h2> 
 <button onClick= { handleAdd } > +1 </button>
 <button onClick= { handleReset } > Reset </button>
 <button onClick= { handleLess } > -1 </button>

 </div>
 ); 
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
export default CounterApp;