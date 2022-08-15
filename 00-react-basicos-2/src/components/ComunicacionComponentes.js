import React,{Component} from 'react'

export default class Padre extends Component{
    state = {
        contador:0
    }

    incrementarContador = (e,string)=>{
        this.setState({
            contador:this.state.contador+string
        })
    }

    render(){
        return(
            <>
                <h2>Comuniacion entre Componentes</h2>
                <p>Contador <b>{this.state.contador}</b></p>
                <Hijo incrementarContador={e=>this.incrementarContador(e,'hola')} mensaje="mensaje para el hijo 1"/>
            </>
        )
    }
}

function Hijo(props){
    return (
        <>
            <h2>{props.mensaje}</h2>
            <button onClick={props.incrementarContador}>+</button>
        </>
        
    )
}