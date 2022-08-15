import React,{useState} from 'react'
import SelectList from './SelectList'

const SelectAnidados = () => {
    const [state, setState] = useState('')
    const [town, setTown] = useState('')
    const [suburb, setSuburb] = useState('')

    const TOKEN ="65d2a374-6c42-4acf-ae7d-6f9d8d462f68"
  return (
    <div>
        <h2>SelectAnidados</h2>
        <SelectList 
        title="estado" 
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={e=> {setState(e.target.value)}} />
        <SelectList 
        title="municipios" 
        url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} 
        handleChange={e=> {setTown(e.target.value)}} />
        <SelectList 
        title="colonia" 
        url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
        handleChange={e=> {setSuburb(e.target.value)}} />
        <pre>
            <code>
                {state}-{town}-{suburb}
            </code>
        </pre>
    </div>
  )
}

export default SelectAnidados