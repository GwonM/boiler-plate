import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);

        const body = {
            email: email,
            password: password,
        };

        dispatch(loginUser(body)).then((res) => {
            if (res.payload.loginSuccess) {
                navigate("/");
            } else {
                alert("error");
            }
        });
    };
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
