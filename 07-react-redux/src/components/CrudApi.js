import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'
import {helpHttp} from '../helpers/helpHttp'
import Loader from '../assets/loader/Loader'
import Message from '../assets/Message'
import {createAction, deleteAction, noAction, readAllAction, updateAction} from '../actions/crudActions'

export const CrudApi = () => {
  const state = useSelector(state=>state)
  const dispatch = useDispatch()
  const {db} = state.crud

  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoagin] = useState(false)

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoagin(true)
    helpHttp().get(url).then(res=>{
      if(!res.error){
        dispatch(readAllAction(res))
        setError(null)
      }else{
        dispatch(noAction())
        setError(res)
      }
      setLoagin(false)
    })

  }, [url,dispatch])
  
  //funcion para crear registro
  const createData = (data)=>{
    data.id = Date.now();
    let options = {body:data,headers:{"content-type":"application/json"}}
    api.post(url,options).then(res=>{
      if(!res.error){
        dispatch(createAction(res))
      }else{
        setError(res)
      }
      setLoagin(false)
    })
  }
  //funcion para actualizar registro
  const updateData = (data)=>{
    let endpoint = `${url}/${data.id}`
    let options = {body:data,headers:{"content-type":"application/json"}}
    api.put(endpoint,options).then(res=>{
      if(!res.error){
        dispatch(updateAction(res))
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
          dispatch(deleteAction(id))
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