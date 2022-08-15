import React,{useState,useEffect} from 'react'
import { LanguageProvider } from '../context/LanguageContext'
import { ThemeProvider } from '../context/ThemeContext'
import { AuthProvider } from '../context/AuthContext'
import FooterContext from './FooterContext'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'

const MyPage = () => {
    return (
        <div className='my-page'>
            <ThemeProvider>
                <LanguageProvider>
                    <AuthProvider>
                        <HeaderContext />
                        <MainContext />
                    </AuthProvider>
                    <FooterContext />
                </LanguageProvider>
            </ThemeProvider>
        </div>
    )
}

export default MyPage