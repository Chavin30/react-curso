import React,{useContext} from 'react'
import CrudContext from '../context/CrudContext';

const CrudTableRow = ({el}) => {
  const {setDataToEdit,deleteData} = useContext(CrudContext)
  let {name,constelation,id} = el;
  return (
    <tr>
        <td>{name}</td>
        <td>{constelation}</td>
        <td>
            <button onClick={(e)=>setDataToEdit(el)}>Editar</button>
            <button onClick={(e)=>deleteData(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow