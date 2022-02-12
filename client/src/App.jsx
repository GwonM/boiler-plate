import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
function App() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">홈 페이지 이동</Link>
                </li>
                <li>
                    <Link to="/login">로그인 페이지 이동</Link>
                </li>
                <li>
                    <Link to="/register">회원가입 페이지 이동</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login/*" element={<LoginPage />} />
                <Route path="/register/*" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
