import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage'
import Login from './views/Login'
import Register from './views/Register'


// 2. Le composant App gère maintenant uniquement le Router
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;