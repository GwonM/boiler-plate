/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { USER_SERVER } from "../../../Config";
import { useSelector } from "react-redux";

function RightMenu(props) {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then((response) => {
            if (response.status === 200) {
                navigate("/login");
            } else {
                alert("Log Out Failed");
            }
        });
    };

    if (user.userData && !user.userData.isAuth) {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="mail">
                    <Link to="/login">sign in</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to="/register">sign up</Link>
                </Menu.Item>
            </Menu>
        );
    } else {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="logout">
                    <a onClick={logoutHandler}>Logout</a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default RightMenu;
