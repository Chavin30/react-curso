import React from 'react'
import { useParams } from 'react-router-dom';

const Usuario = () => {
    let {username} = useParams();
    return (
        <div>
            <h3>Perfil de usuario</h3>
            <p>Nombre del usuario <b>{username}</b></p>
        </div>
    )
}

export default Usuario