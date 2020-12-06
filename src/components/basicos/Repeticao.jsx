import React from 'react'
import products from '../../data/products'

export default (props) => {
    function getProdutosLi() {
        return products.map(
            prod => {
                return <li key={prod.id}>
                    {prod.id} - {prod.name} - R$ {prod.preco}
                </li>
            }
        )
    }

    return <div>
        <h2>Repetição</h2>
        <ul>
            {getProdutosLi()}
        </ul>
    </div>

}

