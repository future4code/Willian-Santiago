import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="contato-info">
           
            <div>
                <p>{ props.email }</p>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;