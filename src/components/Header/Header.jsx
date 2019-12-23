import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return <header className='header'>
        <img className={s.logo} src='https://assets.faceit-cdn.net/avatars/fd587169-ebd4-46bd-a3d8-f67bbbb833ef_1551178141299.jpg' alt='logo'></img>
        
        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </header>
}
export default Header;