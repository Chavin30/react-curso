import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const initialForm = {
    name:'',
    constelation:'',
    id:null
}

export const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) => {
    const [form, setForm] = useState(initialForm)
    let navitage = useNavigate()

    useEffect(() => {
      if(dataToEdit){
        setForm(dataToEdit)
      }else{
        setForm(initialForm)
      }
    }, [dataToEdit])
    

    const handleChange = (e)=>{
      setForm({
        ...form,[e.target.name]:e.target.value
      })
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(!form.name || !form.constelation) alert('datos incompletos')
      if(form.id===null) {createData(form)}
      else{updateData(form)}
      handleReset();
    }

    const handleReset = (e)=>{
      setForm(initialForm)
      setDataToEdit(null)
      navitage('/')
    }
  return (
    <div>
      <h3>{dataToEdit?'Editar':'Agregar'}</h3>
        <form onSubmit={handleSubmit}>
            <input type='text' name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
            <input type='text' name="constelation" placeholder="Constelation" onChange={handleChange} value={form.constelation}/>
            <input type="submit" value="Enviar"/>
            <input type="reset" value="Limpiar" onClick={handleReset}/>
        </form>
    </div>
  )
}
