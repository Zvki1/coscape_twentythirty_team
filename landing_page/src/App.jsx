import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import PersoInfo from './pages/dashboard/PersoInfo';
// import Navbar from './components/layouts/navbar';


function App() {
  return (
    <Router>
      {/* ma9dertch nhidi navbar f dashboard */}
       {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perso-info" element={<PersoInfo />} />
        
      </Routes>
    </Router>
  );
}

export default App
