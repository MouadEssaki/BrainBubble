import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage'
import Login from './views/Login'


// 2. Le composant App gère maintenant uniquement le Router
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;