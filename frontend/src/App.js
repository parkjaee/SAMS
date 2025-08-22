import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/main" element={<Main/>} />
            </Routes>
        </Router>
    )
}

export default App;
