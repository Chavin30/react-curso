import React,{useEffect,useState} from 'react';

export default function Prueba({dato}){
    const[nuevo,setNuevo]=useState(dato)

    const cambiar = (dato)=>{
        setNuevo(dato)
        console.log(dato)
    }

    return(
        <>
            <h2>{nuevo}</h2>
            <button onClick={e=>cambiar('hola')}>Cambiar dato</button>
        </>
    )
}