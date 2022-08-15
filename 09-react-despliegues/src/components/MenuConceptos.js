import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const MenuConceptos = () => {
  return (
    <nav>
      <ul>
        <li>
          <span>Links</span>
          <Link to='/'>Home</Link>
          <Link to='/acerca'>Acerca</Link>
          <Link to='/contacto'>Contacto</Link>
          <Link to='/no-existe'>Error-404</Link>
        </li>
        <li>
          <span>NavLinks</span>
          <NavLink className={(navData) => (navData.isActive ? "active" : '')} to='/'>Home</NavLink>
          <NavLink className={(navData) => (navData.isActive ? "active" : '')} to='/acerca'>Acerca</NavLink>
          <NavLink className={(navData) => (navData.isActive ? "active" : '')} to='/contacto'>Contacto</NavLink>
          <NavLink className={(navData) => (navData.isActive ? "active" : '')} to='/no-existe'>Error-404</NavLink>
        </li>
        <li>
          <span>Parametros</span>
          <Link to='/usuario/chavin'>Usuario</Link> 
          <Link to='/usuario/martin'>Usuario</Link>
        </li>
        <li>
          <span>Parametros de consulta</span>
          <Link to='/productos'>Productos</Link>
        </li>
        <li>
          <span>Redireccion</span>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas</span>
          <Link to='/react'>React</Link>
        </li>
        <li>
          <span>Rutas Privadas</span>
          <Link to='/login'>Login</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuConceptos