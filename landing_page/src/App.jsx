import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import PersoInfo from './pages/dashboard/PersoInfo';
import { HeaderFooterLayout } from './components/layouts/layout-router/HeaderFooterLayout';
import { SidebarLayout } from './components/layouts/layout-router/SidebarLayout';
import ManageTeam from './pages/dashboard/manage-team';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<HeaderFooterLayout><Login/></HeaderFooterLayout>} />
        <Route path="/register" element={<HeaderFooterLayout><Register /></HeaderFooterLayout>} />
        <Route path="/perso-info" element={<SidebarLayout><PersoInfo /></SidebarLayout>} />
        <Route path="/manage-team" element={<SidebarLayout><ManageTeam /></SidebarLayout>} />
        
      </Routes>
    </Router>
  );
}

export default App
