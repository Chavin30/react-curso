import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sumar5, sumar, reset, restar, restar5 } from '../actions/contadorActions'

const Contador = () => {
    const state = useSelector(state => state) //manda el estado del store combinado
    const dispatch = useDispatch()
    
    return (
        <div>
            <h2>Contador Redux</h2>
            <nav>
                <button onClick={()=> dispatch(sumar5())}>+5</button>
                <button onClick={()=> dispatch(sumar())}>+1</button>
                <button onClick={()=> dispatch(reset())}>0</button>
                <button onClick={()=> dispatch(restar())}>-1</button>
                <button onClick={()=> dispatch(restar5())}>-5</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
    )
}

export default Contador