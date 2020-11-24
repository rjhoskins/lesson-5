import React from 'react';
import { Link } from 'react-router-dom'

import './header.styles.scss';

import {auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assests/logo.svg'

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className='logoContainer' to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options"> 
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            {
                currentUser ? (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                : ( <Link className='option' to='/sign-in'>SIGN IN</Link>)
            }
        </div>
    </div>


)

export default Header;

