import logo from './logo.svg';
import './App.css';
import { CrudApp } from './components/CrudApp';
import { CrudApi } from './components/CrudApi';
import SongSearch from './components/SongSearch';
import SelectAnidados from './components/SelectAnidados';
import ContactForm from './components/ContactForm';
import Modals from './components/Modals';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <Modals/>
      <hr/>
      <ContactForm/>
      <hr/>
      <SelectAnidados/>
      <hr/>
      <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp/>
    </>
  );
}

export default App;
