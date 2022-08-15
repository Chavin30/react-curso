import {useContext} from 'react'
import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'
import Loader from '../assets/loader/Loader'
import Message from '../assets/Message'
import CrudContext from '../context/CrudContext'


export const CrudApi = () => {
  
  const {loading,error,db} = useContext(CrudContext)

  return (
    <div>
        <h2>CRUD API</h2>
        <article className='grid-1-2'>
          <CrudForm/>
          {loading && <Loader/>}
          {error && <Message msg={`Error ${error.status} : ${error.statusText}`} bgColor="#dc3545"/>}
          {db && <CrudTable/> }
        </article>
    </div>
  )
}