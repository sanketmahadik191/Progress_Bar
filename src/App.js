
import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './ProgressBar';

function App() {

  const[value ,setValue] = useState(0);

  useEffect (()=>
  {
    setInterval(()=>
    {
      setValue((val)=> val+0.5 );
    },30);
  },[]);
  
  return (
    <div className="App">
      <h3>Progrss Bar</h3>
      <ProgressBar value={value}> </ProgressBar>
    </div>
  );
}

export default App;
