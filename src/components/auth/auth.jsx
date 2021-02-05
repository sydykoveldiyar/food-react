import './auth.css';
import { getToken } from '../api/api';
import React, { useState } from 'react';
import * as axios from "axios";
const Auth = () => {
    const [user, setUser] = useState({});
    const handleUser = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const login = async () => {
        const {data: token} = await axios.post(`${getToken}`, user);
        console.log(token);
    }

    return (
        <div className="auth">
            <div className="auth_container container">
                <div className="auth__content">
                    <div action="" className="auth__form">
                        <h1 className="auth__title">CRM Cafe</h1>
                        <input name="login" id="auth__login" type="text" className="auth__input" placeholder="Логин" onChange={handleUser}/>
                        <input name="password" id="auth__password" type="password" className="auth__input" placeholder="Пароль" onChange={handleUser}/>
                        <button className="auth__btn" onClick={login}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;