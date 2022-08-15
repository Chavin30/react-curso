import React from 'react'

const CartItem = ({data,delOneFromCart,delAllFromCart}) => {
    let {id,name,price,quantity} = data
    return (
        <div style={{borderBottom:"thin solid gray"}}>
            <h4>{name}</h4>
            <h5>${price}.00 x {quantity} = ${price*quantity}.00</h5>
            <button onClick={()=>delOneFromCart(id)}>Eliminar uno</button>
            <button onClick={()=>delAllFromCart(id,true)}>Eliminar todos</button>
        </div>
    )
}

export default CartItem