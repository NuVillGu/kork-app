import React from "react";


function CardButton ({id, name, handleEvent, span, hidden, className}) {

    return ( 
                <button onClick={handleEvent} className={`card-button card-button_hidden_${hidden} ${className}`} id={id}>
                {
                    span ? (
                        <div>{name}<span>{span}</span></div>
                    ) : (
                        name
                    )
                }
                </button> 
            );
}

export default CardButton;