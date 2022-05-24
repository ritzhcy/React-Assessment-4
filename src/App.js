
import './App.css';
import Students from './Component/Students'
import Contact from './Component/Contact'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './Component/Home';

function App() {
  return (
    <BrowserRouter>
      <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
        <div>
          <Link to="/">
            <button className='btn btn-outline-success'>
              Home 
            </button>
          </Link>
        </div>
        <div>
          <Link to={'/Students'}>
            <button className='btn btn-outline-primary'>
              Student 
            </button>
          </Link>
        </div>
        <div>
          <Link to={'Contact'}>
            <button className='btn btn-outline-warning'>
              Contact Us 
            </button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Students' element={<Students/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;