import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}>Jõao</Filho>
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome="Silva">José</Filho>
    </div>
