import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Header from "./pages/Header"
import Main from "./pages/Main";
import NoticeBoard from "./pages/Board/notice-board";
import FreeBoard from "./pages/Board/free-board";
import QuestionBoard from "./pages/Board/question-board";
import TipBoard from "./pages/Board/tip-board";
import ReviewBoard from "./pages/Board/review-board";


//헤더 없는 페이지 구성
function AppContent() {
    const location = useLocation();


    // 헤더를 숨길 페이지들
    const hideHeaderPages = ['/Login'];
    const shouldShowHeader = !hideHeaderPages.includes(location.pathname);

    return (
        <>
            {shouldShowHeader && <Header />}
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<Main/>} />
                <Route path="/main" element={<Main/>} />
                <Route path="/notice" element={<NoticeBoard/>} />
                <Route path="/free" element={<FreeBoard/>} />
                <Route path="/question" element={<QuestionBoard/>} />
                <Route path="/tip" element={<TipBoard/>} />
                <Route path="/review" element={<ReviewBoard/>} />
            </Routes>
        </>
    )

}



function App() {
    return (
        <Router>
            <AppContent/>
        </Router>
    )
}

export default App;
