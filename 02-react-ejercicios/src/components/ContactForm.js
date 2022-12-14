import React from 'react'
import { useForm } from '../hooks/useForm'
import Loader from '../assets/loader/Loader'
import Message from '../assets/Message'

const initialForm = {
    name:"",
    email:"",
    subject:"",
    comments:""
}

const validationsForm = (form) =>{
    let errors = {}
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexComments = /^.{1,255}$/;


    if(!form.name.trim()){
        errors.name = "El campo 'Nombre' es requiredio";
    }else if(!regexName.test(form.name.trim())){
        errors.name="El campo 'Nombre' solo acepta letras y espacios en blanco"
    }

    if(!form.email.trim()){
        errors.email = "El campo 'Email' es requiredio";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email="El campo 'Email' no es valido"
    }

    if(!form.subject.trim()){
        errors.subject = "El campo 'Asunto a tratar' es requiredio";
    }

    if(!form.comments.trim()){
        errors.comments = "El campo 'Comentarios' es requiredio";
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments="El campo 'Comentarios' no debe exceder los 255 caracteres"
    }

    return errors
}

let styles = {
    fontWeight:"bold",
    color:"#dc3545"
}

const ContactForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm,validationsForm)

    return (
        <div>
            <h2>Formularios de contacto</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Escribe tu nombre" 
                    onChange={handleChange} 
                    value={form.name} 
                    onBlur={handleBlur} 
                    required
                />
                {errors.name && <p style={styles}>{errors.name}</p>}
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Escribe tu email" 
                    onChange={handleChange} 
                    value={form.email} 
                    onBlur={handleBlur} 
                    required
                />
                {errors.email && <p style={styles}>{errors.email}</p>}
                <input 
                    type="text" 
                    name="subject" 
                    placeholder="Asunto a tratar" 
                    onChange={handleChange} 
                    value={form.subject} 
                    onBlur={handleBlur} 
                    required
                />
                {errors.subject && <p style={styles}>{errors.subject}</p>}
                <textarea
                    name="comments"
                    cols="50"
                    rows="5"
                    placeholder="Escribe tus comentarios"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.comments}
                    required
                >
                </textarea>
                {errors.comments && <p style={styles}>{errors.comments}</p>}
                <input type="submit" value="Enviar"/>
            </form>
            {loading && <Loader/>}
            {response && <Message msg={'Los datos han sido enviados'} bgColor="#198754" />}
        </div>
    )
}

export default ContactForm