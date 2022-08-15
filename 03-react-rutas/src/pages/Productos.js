import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Productos = () => {
    const LIMIT = 20;
    let {search} = useLocation()
    let query = new URLSearchParams(search)
    let start =  Math.abs(parseInt(query.get('inicio'))) || 1
    let end =  Math.abs(parseInt(query.get('fin'))) || LIMIT

    let navigate = useNavigate()

    const handlePrev=()=>{
        navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`)

    }
    const handleNext=()=>{
        navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`)
    }
  return (
    <div>
        <h3>productos</h3>
        <p>
            mostrando productos del <b>{start}</b> al <b>{end}</b>    
        </p>
        {start>LIMIT && <button onClick={handlePrev}>atras</button>}
        <button onClick={handleNext}>adelante</button>
    </div>
  )
}

export default Productos