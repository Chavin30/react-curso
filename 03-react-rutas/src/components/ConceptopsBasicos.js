import React from 'react'
import {BrowserRouter as Router,Routes,Navigate,Route, HashRouter,Link} from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Dashboard from '../pages/Dashboard'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Productos from '../pages/Productos'
import ReactTopics from '../pages/ReactTopics'
import Usuario from '../pages/Usuario'
import MenuConceptos from './MenuConceptos'
import PrivatesRoute from './PrivatesRoute'

const ConceptopsBasicos = () => {
  return (
    <div>
        <h2>Hash Router</h2>
        <HashRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/acerca">Acerca</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/acerca' element={<Acerca/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
        </HashRouter>
        <hr/>
        <h2>ConceptopsBasicos</h2>
         <Router> {/* componente padre */}
            <MenuConceptos/>
            <Routes>
                <Route path='*' element={<Error/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/acerca' element={<Acerca/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/usuario/:username' element={<Usuario/>}/>
                <Route path='/productos' element={<Productos/>}/>

                <Route path='/about' element={<Navigate to="/acerca"/>}/>
                <Route path='/contact' element={<Navigate to="/contacto"/>}/>

                <Route path='/react/*' element={<ReactTopics/>}/>
                
                <Route path='/login' element={<Login/>}/>
                <Route path='/dashboard' element={<PrivatesRoute component={Dashboard} />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default ConceptopsBasicos