import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

function RegisterPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    };

    const onNameHandler = (e) => {
        setName(e.target.value);
    };

    const onPasswordConfirmHandler = (e) => {
        setPasswordConfirm(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);

        if (password !== passwordConfirm && password !== "") {
            alert("비밀번호가 다릅니다.");
            return;
        }

        const body = {
            email: email,
            password: password,
            name: name,
        };

        dispatch(registerUser(body)).then((res) => {
            console.log(res);
            if (res.payload.success) {
                navigate("/login");
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
                <label>Name</label>
                <input type="test" value={name} onChange={onNameHandler} />
                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />
                <label>Password</label>
                <input type="password" value={passwordConfirm} onChange={onPasswordConfirmHandler} />
                <br />
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default RegisterPage;
