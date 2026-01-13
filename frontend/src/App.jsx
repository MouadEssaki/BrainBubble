import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage'
import Login from './views/Login'
import Dashboard from './views/Dashboard';
import Workspace from './views/Workspace';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Login" element={<Login />} />

                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Workspace/:id" element={<Workspace />} />


                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;