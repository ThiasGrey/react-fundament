import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) => (
    <div className="App">
        <h3>Fundamentos React</h3>
        <div className="cards">
            <Card titulo="MegaSena gerador" color="#8a2be2">
                <Mega qtdNumero={6}></Mega>
            </Card>

            <Card titulo="Contador" color="#b1dd52">
                <Contador valor={100} passo={10}></Contador>
            </Card>

            <Card titulo="Form Imput" color="#9ed1d3">
                <Input></Input>
            </Card>

            <Card titulo="Super Comunicação INdireta" color="#098922">
                <Super></Super>
            </Card>

            <Card titulo="Pai e Filho - Comunicação Direta" color="#09f911">
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card titulo="Condicional com IF" color="#fd5e53">
                <CondicionalComIf numero={9}></CondicionalComIf>
            </Card>

            <Card titulo="Condicional" color="#b1dd52">
                <Condicional numero={9}></Condicional>
            </Card>

            <Card titulo="Repetição" color="#9ed1d3 ">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="Componente COm Parametro" color="#8a2be2">
                <ComParametro titulo="Esse é o Titulo" subtitulo="Esse é o subTitulo"></ComParametro>
            </Card>

            <Card titulo="Componente com Filhos" color="#5784c1">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Lui</li>
                        <li>Maria</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="Primeiro" color="#b1dd52">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
);