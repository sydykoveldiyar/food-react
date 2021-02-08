import React from 'react';
import {NavLink} from "react-router-dom";
import './admin-footer.css'

const AdminFooter = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__menu">
                        <NavLink to="#">Home</NavLink>
                        <NavLink to="#">Cook</NavLink>
                        <NavLink to="#">Barmen</NavLink>
                    </div>
                    <p className="footer__copyright">Copyright © 2019 Neobis</p>
                </div>
            </footer>
        </div>
    );
};

export default AdminFooter;