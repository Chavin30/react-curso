import React from 'react'
import Loader from '../assets/loader/Loader'
import Message from '../assets/Message'
import { useFetch } from '../hooks/useFetch'

const SelectList = ({title,url,handleChange}) => {
  const [data,error,loading] = useFetch(url)
  console.log(data,error,loading)

  if(!data) return null//evitar renderizados inecesarios
  if(error){
    return <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />
  }
  let id = `select-${title}`
  let label = title.charAt(0).toUpperCase() + title.slice(1)
  let options = data.response[title]
 
  return (
    <> 
      <lable htmlFor={id}>{title}</lable>
      {loading && <Loader/>}
      <select name={id} id={id} onChange={handleChange}>
          <option value="">Elige un {title}</option>
          {data && options.map(el=>(
            <option value={el}>{el}</option>
          ))}
      </select>
    </>
  )
}

export default SelectList