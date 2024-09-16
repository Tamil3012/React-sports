import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Comp/Home';
import About from './Comp/About';
import Navbar from './Nav/Navbar';
import Project from './Comp/Project';
import Contact from './Comp/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Comp/Product';
import { Footer } from './Nav/Footer';
import { Topnav } from './Nav/Topnav';
import { Shop } from './Comp/Shop';
import { Login } from './Comp/Login';
import ScrollToTop from './Comp/ScrollToTop';



function App() {

  return (
    <div className="App">
        
        <Topnav />
          <BrowserRouter>
          <ScrollToTop/>
            <Navbar/>

                  <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/shop' element={<Shop/>} />
                        <Route path='/product/:id' element={<Product/>} />
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/login' element={<Login/>} />
                  </Routes>
          </BrowserRouter>

          <Footer/>
          

    </div>
  );
}

export default App;
