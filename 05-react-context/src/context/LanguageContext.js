import { createContext, useState } from "react";

const LanguageContext = createContext()
const initialLanguage = "es"
const translation = {
    es:{
        headerTitle: "Mi aplicacion CON Context Api",
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
        headerTitle: "My application WITH Context Api",
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

const LanguageProvider = ({children}) =>{
    const [language, setLanguage] = useState(initialLanguage)
    const [texts, setTexts] = useState(translation[language])

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

    const data={language,texts,handleLanguage}
    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export {LanguageProvider}
export default LanguageContext