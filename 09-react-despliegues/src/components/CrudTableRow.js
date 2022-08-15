import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const CrudTableRow = ({el,setDataToEdit,deleteData}) => {
  let {name,constelation,id} = el;
  let navigate = useNavigate()

  const handleEdit = () =>{
    setDataToEdit(el)
    navigate(`/editar/${id}`)
  }
  return (
    <tr>
        <td>{name}</td>
        <td>{constelation}</td>
        <td>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={(e)=>deleteData(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow