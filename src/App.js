// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   <Navbar title="Textutils" about="About Us"></Navbar>
   <div className="container" >
   <TextForm></TextForm>
  
   </div>
  
   </>
  );
}

export default App;
