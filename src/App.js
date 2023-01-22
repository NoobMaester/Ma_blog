import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Footer from "./components/Footer"
import Services from "./pages/Services"
import Contact from "./pages/Contact";
import Register from "./pages/Admin/Register";
import Login from "./pages/Admin/Login";
import Posts from "./pages/Admin/post";
import Add from "./pages/Admin/Add";
import Navbar from "./components/navbar/Navbar";
import Single from "./pages/Admin/Single";


function App() {
  return (
    <BrowserRouter>
    <header>
      <Navbar/>
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>} ></Route>
        <Route path="Services" element={<Services/>} ></Route>
        <Route path="contact" element={<Contact/>} ></Route>
        <Route path="register" element={<Register/>} ></Route>
        <Route path="posts" element={<Posts/>} ></Route>
        <Route path="add" element={<Add/>} ></Route>
        <Route path="login" element={<Login/>} ></Route>
        <Route path='single/:pid' element={<Single />} />

      </Routes>
      <Footer/>
    </main>
    </BrowserRouter>
  );
}

export default App;
