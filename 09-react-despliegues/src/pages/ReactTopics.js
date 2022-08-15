import React from 'react'
import { Link,Routes,Route, useParams } from 'react-router-dom'

const Topic = () =>{
    let {topic} =useParams()
    return (
        <div>
            <h4>{topic}</h4>
            <p>
                este es el parrafo a renderizar
            </p>
        </div>
    )
}


const ReactTopics = () => {

  return (
    <div>
        <h3>Temas de React</h3>
        <ul>
            <li><Link to="jsx">JSX</Link></li>
            <li><Link to="props">Props</Link></li>
            <li><Link to="estado">Estado</Link></li>
            <li><Link to="componentes">Componentes</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<p>Elige un tema de react</p>} />
            <Route path="/:topic" element={<Topic/>} />
        </Routes>
    </div>
  )
}

export default ReactTopics