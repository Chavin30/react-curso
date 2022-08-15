import React from 'react'

const CartItem = ({data,delFromCart}) => {
    let {id,name,price,quantity} = data
    return (
        <div style={{borderBottom:"thin solid gray"}}>
            <h4>{name}</h4>
            <h5>${price}.00 x {quantity} = ${price*quantity}.00</h5>
            <button onClick={e=>delFromCart(id)}>Eliminar uno</button>
            <button onClick={e=>delFromCart(id,true)}>Eliminar todos</button>
        </div>
    )
}

export default CartItem