import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.styles.scss';

import {auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assests/logo.svg'
import  CartIcon  from '../../components/cart-icon/cart-icon.component'
import  CartDropdown  from '../../components/cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
            </div>
            {hidden ? null : <CartDropdown /> }
    </div>


)

const mapstateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapstateToProps)(Header);

