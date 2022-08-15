import React,{useState} from 'react';

export default function Formularios(){
    const [form,setForm] = useState({})
    const handelChange = e =>{
        setForm({
            ...form,[e.target.name]:e.target.value,
        })
    }
    const handelChecked = e =>{
        setForm({
            ...form,[e.target.name]:e.target.checked,
        })
    }
    // const [sabor,setSabor] = useState('')
    // const [lenguaje,setLenguaje] = useState('')
    // const [terminos,setTerminos] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault();
        alert('El formulario se ha enviado');
    }

    return (
        <>
            <h2>Formularios</h2>
            {/* <form onSubmit={handleSubmit} >
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                <p>Elige tu sabor js favorito</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={(e)=>setSabor(e.target.value)} defaultChecked/>
                <label htmlFor='vanilla'>vanilla</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor='react'>react</label>
                <input type="radio" id="angular" name="sabor" value="angular" onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor='angular'>angular</label>
                <input type="radio" id="vue" name="sabor" value="vue" onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor='vue'>vue</label>
                <input type="radio" id="svelte" name="sabor" value="svelte" onChange={(e)=>setSabor(e.target.value)}/>
                <label htmlFor='svelte'>svelte</label>
                <p>Elige tu lenguaje de programación favorito</p>
                <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)} defaultValue>
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                    <option value="rb">Ruby</option>
                </select>
                <br/>
                <label htmlFor='terminos'>Acepto terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={(e)=>setTerminos(e.target.checked)}/>
                <input type="submit" />
            </form> */}
            <form onSubmit={handleSubmit} >
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handelChange}/>
                <p>Elige tu sabor js favorito</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handelChange} defaultChecked/>
                <label htmlFor='vanilla'>vanilla</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={handelChange}/>
                <label htmlFor='react'>react</label>
                <input type="radio" id="angular" name="sabor" value="angular" onChange={handelChange}/>
                <label htmlFor='angular'>angular</label>
                <input type="radio" id="vue" name="sabor" value="vue" onChange={handelChange}/>
                <label htmlFor='vue'>vue</label>
                <input type="radio" id="svelte" name="sabor" value="svelte" onChange={handelChange}/>
                <label htmlFor='svelte'>svelte</label>
                <p>Elige tu lenguaje de programación favorito</p>
                <select name="lenguaje" onChange={handelChange} defaultValue>
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                    <option value="rb">Ruby</option>
                </select>
                <br/>
                <label htmlFor='terminos'>Acepto terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={handelChecked}/>
                <input type="submit" />
            </form>
        </>
    )
}