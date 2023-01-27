import React from 'react';
import '../css/BotonClear.css';

const BotonClear = (props) => {
    return (
        <div 
            className='btn-clear'
            onClick={props.manejarInput}>
            {props.children}
        </div>
    );
}

export default BotonClear;