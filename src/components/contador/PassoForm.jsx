import React from 'react'

export default (props) => {


    return (
        <div>
            <h2>Passo: {props.passo}</h2>
            <input type="number" value={props.passo} onChange={(e) => props.onPassoChange(+e.target.value)} />
        </div>
    )
}