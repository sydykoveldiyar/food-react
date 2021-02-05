import './auth.css';
import { getToken } from '../api/api';
import React, { useState } from 'react';
import * as axios from "axios";

const Auth = () => {
    const [user, setUser] = useState({});
    const handleUser = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    let login = async () => {
        try {
            const response = await axios.post(`${getToken}`, user);
            localStorage.setItem('jwtToken', response.data.access_token);
            localStorage.setItem('userName', response.data.username);
            localStorage.setItem('role', response.data.role);
            const userRole = localStorage.getItem('role');
            switch (userRole) {
                case '1':
                    window.location.href = "/admin"
                    break;
                case '3':
                    window.location.href = "/waiter"
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="auth">
            <div className="auth_container container">
                <div className="auth__content">
                    <div className="auth__form">
                        <h1 className="auth__title">CRM Cafe</h1>
                        <input name="login" id="auth__login" type="text" className="auth__input" placeholder="Логин" onChange={handleUser} />
                        <input name="password" id="auth__password" type="password" className="auth__input" placeholder="Пароль" onChange={handleUser} />
                        <button className="auth__btn" onClick={login}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;