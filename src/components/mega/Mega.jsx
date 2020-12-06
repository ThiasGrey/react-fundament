import React, { useState } from 'react'

export default (props) => {

    const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0))

    function gerarNumerosNaoContidos(array) {
        const max = 60
        const min = 1
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return (
            array.includes(novoNumero) ? gerarNumerosNaoContidos(array) : novoNumero
        )

    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdNumero)
            .fill(0)
            .reduce((a, e) => {
                console.log(a, e)
                return [...a, gerarNumerosNaoContidos(a)]
            }, [])
            .sort((a, b) => a - b)

        setNumeros(novoArray)

    }
    return (
        <div>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </div>
    )
}