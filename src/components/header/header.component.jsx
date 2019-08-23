import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assest/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, cartHidden }) => (
	<div className='header'>
		<Link to='/' className='logo-container'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link to='/shop' className='option'>
				SHOP
			</Link>
			<Link to='/constac' className='option'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='option' onClick={() => auth.signOut()}>
					{' '}
					SIGN OUT{' '}
				</div>
			) : (
				<Link to='/signin' className='option'>
					{' '}
					SIGN IN{' '}
				</Link>
			)}
			<CartIcon />
		</div>
		{cartHidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	cartHidden: hidden
});

export default connect(mapStateToProps)(Header);
