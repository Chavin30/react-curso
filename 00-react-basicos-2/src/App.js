import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6,EventosES7,MasSobreEventos} from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';
import Prueba from './components/Prueba';

function App() {
  let arr = ['lunes','martines','miercoles','jueves','viernes'];
  return (
    <div className="App">
      <Estilos/>
      {/* <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {arr.map((el,i)=>{
            return <li key={i}>{el}</li>
          })}
        </p>
        </section>
        <section>
          <Componente message="hola soy un componente"/>
          <hr/>
          <Propiedades 
            cadena="Esto es una cadena de texto" 
            numero='hola' 
            booleano={true}
            arreglo={[1,2,3]} 
            objeto = {{nombre:"Jon",correo:"martin@gmail.com"}}
            funcion = {(num)=>num*num}
            elementoReact = {<i>Esto es un elemento react</i>}
            componenteReact = {<Componente message="hola"/>}
           />
           <hr/>
           <Estado />
           <hr/>
           <RenderizadoCondicional/>
           <hr/>
           <RenderizadoElementos/>
           <hr/>
           <EventosES6/>
           <hr/>
           <EventosES7/>
           <hr/>
           <MasSobreEventos/>
           <hr/>
           <Padre/>
           <hr/>
           <CicloVida/>
           <hr/>
           <AjaxApis/>
           <hr/>
           <ContadorHooks titulo="Seguidores"/>
           <hr/>
           <ScrollHooks/>
           <hr/>
           <RelojHooks/>
           <hr/>
           <AjaxHooks/>
           <hr/>
           <HooksPersonalizados/>
           <hr/>
           <Referencias/>
           <hr/>
           <Formularios/>
           <hr/>
           <Estilos/>
           <hr/>
           <ComponentesEstilizados/>
           <hr/>
           <Prueba dato="dato incial"/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
        </section>
      </header> */}
      
    </div>
  );
}

export default App;
