import React from 'react';
import s from './Header.module.css';
import {Link} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
            <img alt={''} src='https://static.vecteezy.com/system/resources/previews/001/188/239/non_2x/heart-logo-png.png' />
       <div className={s.loginBlock}>
           {props.login ? props.login : <Link to={"/login"}>Login</Link>}
       </div>
    </header>
}

export default Header;