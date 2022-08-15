import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
   <div>
    <h1>Memorización en React</h1>
    <hr/>
    <h2>Teoria</h2>
    <h3>
      <a href="https://es.reactjs.org/docs/react-api.html#reactmemo" target="_blank" rel="noreferrer">
        memo
      </a>
      <ul>
          <li>Se encarga de memorizar un componente</li>
          <li>Lo vuelve a memorizar al momento de que sus <b>props</b> cambian</li>
          <li>Evita re-renderizados</li>
          <li>hay que evitarl en la memdia de lo posible, 
              pues podria ser mas costosa la tarea de memorizacion que el re-renderizado del componente</li>
          <li>
              usalo cuando:
              <ul>
                  <li>Tenemos muchos elementos renderizados en una lista</li>
                  <li>Llamamos datos de APIs</li>
                  <li>Un componente se vuelve muy pesado</li>
                  <li>Salen alertas de rendimiento en consola</li>
              </ul>
          </li>
      </ul>
    </h3>
    <h3>
      <a href='https://reactjs.org/docs/hooks-reference.html#usecallback' target="_blank" rel="noreferrer">useCallback</a>
      <ul>
        <li>Memoriza una funcion, para no volverla a definir en cada render</li>
        <li>usalo siempre que se pase una funcion como prop a un componente memorizado</li>
        <li>Usalo siempre que se pase una funcion como parametro de un efecto</li>
      </ul>
    </h3>
    <h3>
      <a href='https://reactjs.org/docs/hooks-reference.html#usememo' target="_blank" rel="noreferrer">useMemo</a>
      <ul>
        <li>Memorizar un valor calculado, es dcir el resultado de una funcion</li>
        <li>Genera propiedades computadas</li>
        <li>Usalo en procesos pesados</li>
      </ul>
    </h3>
    <hr/>
    <Contador/>
   </div>
  );
}

export default App;
