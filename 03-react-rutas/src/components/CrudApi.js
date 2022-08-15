import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route, HashRouter,Link,NavLink, useNavigate} from 'react-router-dom'
import Error from '../pages/Error'
import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'
import {helpHttp} from './helpHttp'
import Loader from './Loader'
import Message from './Message'


export const CrudApi = () => {
  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoagin] = useState(false)


  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoagin(true)
    helpHttp().get(url).then(res=>{
      if(!res.error){
        setDb(res)
        setError(null)
      }else{
        setDb(null)
        setError(res)
      }
      setLoagin(false)
    })

  }, [url])
  

  //funcion para crear registro
  const createData = (data)=>{
    data.id = Date.now();
    let options = {body:data,headers:{"content-type":"application/json"}}
    api.post(url,options).then(res=>{
      console.log(res)
      if(!res.error){
        setDb([...db,res])
      }else{
        setError(res)
      }
      setLoagin(false)
    })
    setDb(
      [...db,data]
    )
  }
  //funcion para actualizar registro
  const updateData = (data)=>{
    let endpoint = `${url}/${data.id}`
    let options = {body:data,headers:{"content-type":"application/json"}}
    api.put(endpoint,options).then(res=>{
      if(!res.error){
        let newData = db.map(el=>(el.id===data.id ? data: el))
        setDb(newData)
      }else{
        setError(res)
      }
    })
  }
  //funcion para borrar un registro
  const deleteData = (id)=>{
    let isDelete = window.confirm(`Estas seguro de eliminar el registro con el id ${id}?`)
    if(isDelete){
      let endpoint = `${url}/${id}`
      let options = {headers:{"content-type":"application/json"}}
      api.del(endpoint,options).then(res=>{
        if(!res.error){
          let newData = db.filter(el=>(el.id!==id))
          setDb(newData)
        }else{
          setError(res)
        }
    })
    }else{ return}
  }

  return (
    <div>
      <HashRouter basename='santos'>
        <header>Crud API con Rutas</header>
        <nav>
          <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')}>Santos</NavLink>
          <NavLink to="/agregar" className={(navData) => (navData.isActive ? "active" : 'none')}>Agregar</NavLink>
        </nav>
        <Routes>
          <Route path="/"
          element={
            <article className='grid-1-2'>
              {db && <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>}
            </article>
             }
          />
          <Route path="/agregar"
          element={<CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>}>
          </Route>
          <Route path="/editar/:id" 
          element={<CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>}
          />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </HashRouter>
        
        {loading && <Loader/>}
        {error && <Message msg={`Error ${error.status} : ${error.statusText}`} bgColor="#dc3545"/>}
    </div>
  )
}