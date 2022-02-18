import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";

//eslint-disable-next-line
export default function (SpecificComponent, option, adminRoute = null) {
    const AuthenticationCheck = (props) => {
        const dispatch = useDispatch();
        const Navigate = useNavigate();
        useEffect(() => {
            dispatch(auth()).then((res) => {
                console.log(res);
                if (!res.payload.isAuth) {
                    if (option) {
                        Navigate("/login");
                    }
                } else {
                    if (adminRoute && !res.payload.isAdmin) {
                        Navigate("/");
                    } else if (!option) {
                        Navigate("/");
                    }
                }
            });
        }, []);
        return <SpecificComponent />;
    };

    return <AuthenticationCheck />;
}
