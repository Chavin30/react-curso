import React,{useState} from 'react'
import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'

const initialDB = [
  {
    id:1,
    name:"Seiya",
    constelation:"Pegaso"
  },
  {
    id:2,
    name:"Shiryu",
    constelation:"Dragon"
  },
  {
    id:3,
    name:"Hyoga",
    constelation:"Cisne"
  },
  {
    id:4,
    name:"Shun",
    constelation:"Andromeda"
  },
  {
    id:5,
    name:"Ikki",
    constelation:"Fenix"
  }
]

export const CrudApp = () => {
  const [db, setDb] = useState(initialDB)
  const [dataToEdit, setDataToEdit] = useState(null)
  //funcion para crear registro
  const createData = (data)=>{
    data.id = Date.now();
    setDb(
      [...db,data]
    )
  }
  //funcion para actualizar registro
  const updateData = (data)=>{
    let newData = db.map(el=>el.id===data.id ? data:el)
    setDb(newData)
  }
  //funcion para borrar un registro
  const deleteData = (id)=>{
    let isDelete = window.confirm(`Estas seguro de eliminar el registro con el id ${id}?`)
    if(isDelete){
      let newData = db.filter(el=>el.id!==id)
      setDb(newData)
    }else{ return}
  }

  return (
    <div>
        <h2>CRUD APP</h2>
        <article className='grid-1-2'>
          <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
          <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>
        </article>
    </div>
  )
}

