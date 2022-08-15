import React,{useState} from 'react'

const initialForm = {
    artist:"",
    song:"",
}

const SongForm = ({handleSearch,handleSaveSong}) => {
    const [form, setForm] = useState(initialForm)
    const [isDisabled, setIsDisabled] = useState(true)

    const handleChange = (e) =>{
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!form.artist || !form.song){
            alert('Datos Incompletos')
            setIsDisabled(true)
            return
        }

        handleSearch(form)
        setForm(initialForm)
        setIsDisabled(false)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="artist" placeholder="Nombre del Intérprete" onChange={handleChange} value={form.artist}/>
            <input type="text" name="song" placeholder="Nombre de la cancion" onChange={handleChange} value={form.song}/>
            <input type="submit" value="Enviar"/>
            <input type="button" value="Agregar Cancion" disabled={isDisabled} onClick={handleSaveSong} />
        </form>
    </div>
  )
}

export default SongForm