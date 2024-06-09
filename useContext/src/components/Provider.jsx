import React from 'react'
import { useContext, useState, createContext } from 'react';
import '../App.css'

function Provider() {

    const userContext = createContext(null)
    const LanguageContext = createContext();

    function LanguageProvider({ children }) {
        const [language, setLanguage] = useState('en');

        const switchLanguage = (lang) => {
            setLanguage(lang)
        }
        return (
            <LanguageContext.Provider value={{ language, switchLanguage }}>
                {children}
            </LanguageContext.Provider>
        )
    }
    function LanguageSelector() {
        const { language, switchLanguage } = useContext(LanguageContext);

        const handleLanguageChange = (e) => {
            switchLanguage(e.target.value)
        }
        return (
            <div>
                {/* <button onClick={() => switchLanguage('en')}>English</button>
            <button onClick={() => switchLanguage('tr')}>Turkish</button> */}

                <select onChange={handleLanguageChange} value={language}>
                    <option value="en">En</option>
                    <option value="tr">Tr</option>
                    <option value="es">Es</option>
                    <option value="gr">Gr</option>
                </select>
                <p>Current Language : {language} </p>
            </div >
        )
    }

    function UserProvider({ children }) {
        const user = {
            name: 'John Doe',
            age: 30,
            email: 'john.doe@example.com'
        };
        return (
            <userContext.Provider value={user}>
                {children}
            </userContext.Provider>
        )
    }
    function UserProfile() {
        const user = useContext(userContext);
        if (!user) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h1>{user.name}</h1>
                <p>Age :{user.age}</p>
                <p>Email :{user.email}</p>
            </div>
        )
    }
    return (
        <>
            <UserProvider>
                <UserProfile />
            </UserProvider>
            <LanguageProvider>
                <LanguageSelector />
            </LanguageProvider>
        </>
    )
}

export default Provider