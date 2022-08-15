import {useState,useCallback} from 'react'
import ContadorHijo from './ContadorHijo'

//Apuntes
//memo sirve para que no se renderice un componente hijo que no es pasado por props 
// cuando se modifica alguna variable de estado del padre

//cuando tienes un componente memorizado y le pasas funciones debes utilizar la funcion useCallback
// para evitar que se vuelva a renderizar al cambio del estado (funciones puras)

//useMemo se utiliza para guardar valores calculados grandes, cuando se necesite renderizar un componente
// y dentro viene una funcion calculada con gran perso, se puede utilizar use Memo


const Contador = () => {
    const [contador, setContador] = useState(0)
    const [input, setInput] = useState('')

    // const sumar = () => setContador(contador+1)
    const sumar = useCallback(()=> setContador(contador+1),[contador])
    // const restar = () => setContador(contador-1)
    const restar = useCallback(()=> setContador(contador-1),[contador])
    const handleInput = (e)=> setInput(e.target.value)

    return (
        <div style={{textAlign:"center"}}>
            <h2>Contador</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{contador}</h3>
            <input type='text' onChange={handleInput} value={input}/>
            <ContadorHijo contador={contador} sumar={sumar} restar={restar}/>
            
        </div>
    )
}

export default Contador