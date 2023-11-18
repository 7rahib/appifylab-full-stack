import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import RequiredAuth from './Pages/Authentication/RequiredAuth';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<RequiredAuth><Home /></RequiredAuth>} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
