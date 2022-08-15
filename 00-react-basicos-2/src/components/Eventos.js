import React,{Component} from 'react';

//constructor y funciones expresadas
export class EventosES6 extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador:0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }
    sumar(e){
        this.setState({
            contador: this.state.contador+1
        })
    }

    restar(e){
        this.setState({
            contador: this.state.contador-1
        })
    }

    render(){
        return( 
        <div>
            <h2>Eventos en Componentes de Clase ES6</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
            <h3>{this.state.contador}</h3>
        </div>
        )
    }
}

//con arrow function y sin constructor
export class EventosES7 extends Component{
    state = {
        contador:0
    }
    sumar=(e)=>{
        // console.log('sumando')
        // console.log(this)
        this.setState({
            contador: this.state.contador+1
        })
    }

    restar=(e)=>{
        // console.log('restando')
        this.setState({
            contador: this.state.contador-1
        })
    }

    render(){
        return( 
        <div>
            <h2>Eventos en Componentes de Clase ES7</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
            <h3>{this.state.contador}</h3>
        </div>
        )
    }
  
}

// function Boton (props){
//     return (<button onClick={props.myonClick}>Botón hecho componente</button>)
// }

const Boton = ({myonClick}) => (<button onClick={myonClick}>Botón hecho componente</button>)


export class MasSobreEventos extends Component {
    handelClick = (e, mensaje) =>{
        // console.log(e);
        // console.log(e.nativeEvent);
        // console.log(e.target);
        // console.log(e.nativeEvent.target);
        // console.log(mensaje);
    }

    render(){
        return (
            <div>
                <h2>Mas sobre eventos</h2>
                {/* <button onClick={(e) => this.handelClick(e,'hola passando parametros desde un evento')}>Saludar</button>
                 */}
                 {/* Evento Personalisado */}
                 {/* <Boton onClick={(e) => this.handelClick(e,'hola passando parametros desde un evento')}/> */}
                 <Boton myonClick={(e) => this.handelClick(e,'hola passando parametros desde un evento')}/>
            </div>
        )
    }
}