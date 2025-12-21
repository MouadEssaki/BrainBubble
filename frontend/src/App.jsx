import { useEffect, useState } from 'react'

function App() {
    const [msg, setMsg] = useState("Connecting to Backend...")

    useEffect(() => {
        fetch("http://localhost:8080/api/test")
            .then(res => res.text())
            .then(data => setMsg(data))
            .catch(() => setMsg("Backend is offline ❌"))
    }, [])

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Brain Bubble App</h1>
            <p>Status: <strong>{msg}</strong></p>
        </div>
    )
}
export default App