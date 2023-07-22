// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/Textform';
import About from './components/About';

function App() {
  return (
    <>
   <Navbar title="Textutils" about="About Us"></Navbar>
   <div className="container" >
   {/* <TextForm></TextForm> */}
   <About></About>
   
   </div>
  
   </>
  );
}

export default App;
