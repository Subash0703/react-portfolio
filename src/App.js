import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/Contact' element={<Contact/>}></Route>
           <Route path='/Portfolio' element={<Portfolio/>}></Route>
           <Route path='/resume' element={<Resume/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
    
    
  );
}

export default App;
