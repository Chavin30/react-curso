import React,{useState,useEffect} from 'react';

export default function ScrollHooks(){
    // console.clear()
    const [scrollY,setScrollY] = useState(0);
    useEffect(()=>{
        // console.log('Moviendo el scroll')
        const detectarScroll = () => setScrollY(window.pageYOffset) 
        window.addEventListener('scroll',detectarScroll)
        return()=>{
            // console.log('Fase de Desmontaje')
            window.removeEventListener('scroll',detectarScroll)
        }
    },[scrollY])

    useEffect(()=>{
        // console.log('Fase de Montaje')
    },[])
    useEffect(()=>{
        // console.log('Fase de Actualizacion')
        //colocar variable dentro del array
    })

    useEffect(()=>{
        return()=>{
            // console.log('Fase de Desmontaje')
        }
    })


    return (
        <>
            <h2>Hooks, useEffect ciclo de vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}