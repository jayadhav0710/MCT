import React,{ useState,useEffect } from 'react'
import '../App.css'
const Header = (mode) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
 
  return (
    <div className='header'>TextUtils
     
     <div className='home'>Home</div>

     
      <button onClick={toggleTheme} className='toggle' >Enable DarkMode</button>
      
      
      
     
    
    </div>
    
  )
}

export default Header