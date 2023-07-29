import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
         <Nav />
         <Routes>
         <Route path='/' element= {<home />} />
         <Route path='/about' element= {<About />} />
         <Route path='/shop' element={<Shop />}/>
         </Routes>
     {/* <Nav /> */}
    </div>
    </BrowserRouter>
  );
}
const home = ( ) =>{
  <div>
  <h1>Home</h1>
  </div>
}
export default App;
