// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
// import About from './components/About';

function App() {

  const[mode,setmode]=useState('light');

  const togMode=()=>
  {
    if(mode ==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="grey";
    }

    else
    {
      setmode('light');
      document.body.style.backgroundColor="white";

    }
  }
  return (
    <>
   <Navbar title="Textutils" mode={mode} toggleMode={togMode}></Navbar>
   <div className="container" >
   <TextForm></TextForm>
   {/* <About></About> */}
  
   
   </div>
  
   </>
  );
}

export default App;
