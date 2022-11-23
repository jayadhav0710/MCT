
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
function App() {

  const [mode,setMode] = useState('light');
  return (
    <div>
<Header  mode = {mode} />
<Main/>
    </div>
  );
}

export default App;
