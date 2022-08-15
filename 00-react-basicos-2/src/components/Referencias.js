import React,{useRef} from 'react';

export default function Referencias(props){
    let refMenu = useRef(),
        refMenu2 = useRef(),
        refMenuBtn = useRef();
        console.log(refMenu,refMenuBtn)
    const handleToggleMenu = (e) =>{
        // const $menu = document.getElementById('menu')
        // if(e.target.textContent==='Menú'){
        //     e.target.textContent = 'Cerrar'
        //     $menu.style.display = "block"
        // }else{
        //     e.target.textContent = 'Menú';
        //     $menu.style.display = "none"
        // }
        if(refMenuBtn.current.textContent==='Menú'){
            refMenuBtn.current.textContent = 'Cerrar'
            refMenu.current.style.display = "block"
            refMenu2.current.style.display = "block"
        }else{
            refMenuBtn.current.textContent = 'Menú';
            refMenu.current.style.display = "none"
            refMenu2.current.style.display = "none"
        }
        console.log(refMenu,refMenuBtn)
    }
    return(
        <>
            <h2>Referencias</h2>
            <button ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
            <nav ref={refMenu} style={{display:'none'}}>
                <a href="#hola">Seccion 1</a>
                <br/>
                <a href="#hola">Seccion 2</a>
                <br/>
                <a href="#hola">Seccion 3</a>
                <br/>
                <a href="#hola">Seccion 4</a>
                <br/>
                <a href="#hola">Seccion 5</a>
                <br/>
            </nav> 
            <nav ref={refMenu2} style={{display:'none'}}>
                <a href="#hola">Seccion 6</a>
                <br/>
                <a href="#hola">Seccion 7</a>
                <br/>
                <a href="#hola">Seccion 3</a>
                <br/>
                <a href="#hola">Seccion 4</a>
                <br/>
                <a href="#hola">Seccion 5</a>
                <br/>
            </nav> 
        </>
    )
}