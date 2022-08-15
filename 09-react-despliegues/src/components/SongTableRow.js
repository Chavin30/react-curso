import React from 'react'
import { useNavigate } from 'react-router-dom'

const SongTableRow = ({el,id,handleDeleteSong}) => {
  
  let {bio,search} = el
  console.log(bio)
  let avatar = bio.artists[0].strArtistThumb
  let avatarStyles = {
    width:'auto',
    height:'40px'
  }
  
  let navigate = useNavigate()
  return (
    <tr>
        <td><img style={avatarStyles} src={avatar} alt={search.artists} /></td>
        <td>{search.artists}</td>
        <td>{search.song}</td>
        <td>
            <button onClick={()=> navigate(`/${id}`)}>Ver</button>
            <button onClick={()=> handleDeleteSong(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default SongTableRow