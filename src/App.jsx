import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default (props) => (
    <div className="App">


        <Card titulo="Condicional com IF">
            <CondicionalComIf numero={9}></CondicionalComIf>
        </Card>

        <Card titulo="Condicional">
            <Condicional numero={9}></Condicional>
        </Card>

        <Card titulo="Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="Componente COm Parametro">
            <ComParametro titulo="Esse é o Titulo" subtitulo="Esse é o subTitulo"></ComParametro>
        </Card>

        <Card titulo="Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Lui</li>
                    <li>Maria</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="Primeiro">
            <Primeiro></Primeiro>
        </Card>

    </div>
);