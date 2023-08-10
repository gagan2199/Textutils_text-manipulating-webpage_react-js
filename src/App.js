// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";

function App() {

  const[mode,setmode]=useState('light');

  const togMode=()=>
  {
    if(mode ==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="#3e5e7e";
      document.title='Textutils-Dark Mode';
      // setInterval(() => {
      //   document.title='Just Illusion';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Calm Down';
      // }, 1500);
    }

    else
    {
      setmode('light');
      document.body.style.backgroundColor="white";
      document.title='Textutils-Light Mode';

    }
  }
  return (
    <>
    <Router>
   <Navbar title="Textutils" mode={mode} toggleMode={togMode}></Navbar>
   <div className="container" >
   <Routes>
    <Route path="/about" element={<About/>}>
    </Route>
    <Route  path="/" element={<TextForm/>}>
    </Route>
  </Routes>
  
  </div>
  </Router>
  
   </>
  );
}

export default App;
