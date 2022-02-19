import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cctv from './components/Cctv';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/User/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Cctv" element={<Cctv/>} />
        <Route path="/" element={<Home/>} exact={true} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </Router>
  );
}
// route로 감쌀 때 componet가 아니라 element
// v6 쓰면서 조금 바뀐듯 ?
export default App;
