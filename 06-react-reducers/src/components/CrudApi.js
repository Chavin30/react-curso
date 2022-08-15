import React,{useState,useEffect,useReducer} from 'react'
import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'
import {helpHttp} from '../helpers/helpHttp'
import Loader from '../assets/loader/Loader'
import Message from '../assets/Message'
import { crudInitialState, crudReducer } from '../reducers/crudReducers'
import { TYPES } from '../actions/crudActions'

export const CrudApi = () => {
  // const [db, setDb] = useState(null)
  const [state, dispatch] = useReducer(crudReducer, crudInitialState)
  const {db} = state
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoagin] = useState(false)

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoagin(true)
    helpHttp().get(url).then(res=>{
      if(!res.error){
        // setDb(res)
        dispatch({type:TYPES.READ_ALL_DATA,payload:res})
        setError(null)
      }else{
        // setDb(null)
        dispatch({type:TYPES.NO_DATA})
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
      if(!res.error){
        // setDb([...db,res])
        dispatch({type:TYPES.CREATE_DATA,payload:res})
      }else{
        setError(res)
      }
      setLoagin(false)
    })
    // setDb(
    //   [...db,data]
    // )
  }
  //funcion para actualizar registro
  const updateData = (data)=>{
    let endpoint = `${url}/${data.id}`
    let options = {body:data,headers:{"content-type":"application/json"}}
    api.put(endpoint,options).then(res=>{
      if(!res.error){
        dispatch({type:TYPES.UPDATE_DATA,payload:data})
        // setDb(newData)
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
          dispatch({type:TYPES.DELETE_DATA,payload:id})
          // setDb(newData)
        }else{
          setError(res)
        }
    })
    }else{ return}
  }

  return (
    <div>
        <h2>CRUD API</h2>
        <article className='grid-1-2'>
          <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
          {loading && <Loader/>}
          {error && <Message msg={`Error ${error.status} : ${error.statusText}`} bgColor="#dc3545"/>}
          {db && <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit}/> }
        </article>
    </div>
  )
}