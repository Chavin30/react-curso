import React,{Component} from 'react';
import data from '../helpers/data.json';

function ElementoLista(props){
    return (
        <li>
            <a href={props.el.web} target="blank">{props.el.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props)
        this.state = {
            seasons:['Primavera','Verano','Otoño','Invierno']
        }
    }

    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.seasons.map((el,i) => <li key={i}>{el}</li>)}
                </ol>
                <h3>Frameworks Fronend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map((el,index) => {
                        return <ElementoLista key={el.id} el={el}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}