import React,{useState,useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const initialTheme = "light"
const initialLanguage = "es"

const translation = {
    es:{
        headerTitle: "Mi aplicacion SIN Context Api",
        headerSubtitle: "Mi Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bienvenido invitado",
        mainHello: "Hola usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina"
    },
    en:{
        headerTitle: "My application WITHOUT Context Api",
        headerSubtitle: "My Header",
        headerLight: "Sure",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Close Session",
        mainWelcome: "Welcome guest",
        mainHello: "Hello user",
        mainContent: "My main content",
        footerTitle: "My footer"
    }
}

const initialAuth = null;

const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme)
    const [language, setLanguage] = useState(initialLanguage)
    const [texts, setTexts] = useState(translation[language])
    const [auth, setAuth] = useState(initialAuth)

    const handleTheme = (e) =>{
        console.log(e.target.value)
        if(e.target.value==='light'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }

    const handleLanguage = (e) =>{
        console.log(e.target.value)
        if(e.target.value==='es'){
            setLanguage('es')
            setTexts(translation.es)
        }else{
            setLanguage('en')
            setTexts(translation.en)
        }
    }

    // const handleLanguage = (e) =>{
    //     // setLanguage(e.target.value)
    //     setTexts(translation[e.target.value])
    // }

    // useEffect(() => {
    //     setTexts(translation[language])
    // }, [language])
    
    const handleAuth = (e) => auth ? setAuth(null) : setAuth(true)

    return (
        <div className='my-page'>
            <Header theme={theme} auth={auth} handleAuth={handleAuth} handleTheme={handleTheme} handleLanguage={handleLanguage} texts={texts}/>
            <Main theme={theme} texts={texts} auth={auth}/>
            <Footer theme={theme} texts={texts}/>
        </div>
  )
}

export default MyPage