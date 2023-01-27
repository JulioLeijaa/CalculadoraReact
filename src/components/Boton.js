import React from 'react';
import '../css/Boton.css';

function Boton(props) {
    const esOperador = (valor) => {
        // eslint-disable-next-line
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }

    return (
        <button 
            className={`btn-contenedor ${esOperador(props.children) ? 'operador': ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            { props.children }
        </button>
    );
}

export default Boton;