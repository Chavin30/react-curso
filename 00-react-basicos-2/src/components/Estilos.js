import React from 'react';
import './Estilos.css'
import moduleStyles from './Estilos.module.css'
import './Estilos.scss'

export default function Estilos(){
    let myStyle={
        borderRadius:'0.5rem',
        margin:"2rem auto",
        maxWidth:"50%"
    }
    return (
        <section className='estilos'>
            <h2>Estilos en react</h2>
            <h3 className='bg-react'>Estilos en hoja CSS</h3>
            <h3 className='bg-react' style={{borderRadius:"0.25rem",margin:'1rem'}}>Estilos en Linea (atributo style)</h3>
            <h3 className='bg-react' style={myStyle}>Estilos en Linea</h3>
            <h3 className='bg-react'>Agregando Normalize con <br/>
            <code>@import-normalize;</code></h3>
            <h3 className={moduleStyles.error}>Agregando con estilos con modulos</h3>
            <h3 className={moduleStyles.success}>Agregando estilos con modulos</h3>
            <h3 className="bg-sass">Agregando con Estilos con Sass</h3>
        </section>
    )
}