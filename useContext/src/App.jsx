import { createContext, useContext, useState } from 'react'
import './App.css'
import Provider from './components/Provider';

function App() {
  const ThemeContext = createContext();

  function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    )
  }
  function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <div className={theme === 'light' ? 'dark' : 'light'} >
        <button onClick={toggleTheme} style={{
          backgroundColor: theme === 'light' ? 'antiquewhite' : 'rgb(37, 37, 37)',
          color: theme === 'light' ? 'rgb(37, 37, 37)' : '#fff', borderRadius: 20, padding: 5, margin: 10
        }}>
          Switch to {theme === 'light' ? 'dark' : 'light'} Theme
        </button>
        <p>Current Theme : {theme} </p>
      </div >
    )
  }


  return (
    <ThemeProvider>
      <ThemeToggle />
      <Provider />
    </ThemeProvider>

  )
}

export default App
