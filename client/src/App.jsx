import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
function App() {
    const Landing = Auth(LandingPage, null);
    const Login = Auth(LoginPage, false);
    const Register = Auth(RegisterPage, false);
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
                {/* <Route path="/" element={<Auth SpecificComponent={LandingPage} option={null} />} />
                <Route path="/login/*" element={<Auth SpecificComponent={LoginPage} option={false} />} />
                <Route path="/register/*" element={<Auth SpecificComponent={RegisterPage} option={false} />} /> */}
                <Route path="/" element={Auth(LandingPage, null)} />
                <Route path="/login/*" element={Auth(LoginPage, false)} />
                <Route path="/register/*" element={Auth(RegisterPage, false)} />
                {/* <Route path="/" element={<Landing />} />
                <Route path="/login/*" element={<Login />} />
                <Route path="/register/*" element={<Register />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
