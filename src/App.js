
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
    <Navbar textutil ="textutils1" about = "about us" />
    <div className='container'>
    <TextForm heading ="enter your text "/>
    </div>
   
    </>
  )
}

export default App;
