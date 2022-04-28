import React from 'react';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

import { useStateContext } from '../context/StateContext';
import { Cart } from '.';

const Navbar = () => {
	const { showCart, setShowCart, totalQuanitities } = useStateContext();
	return (
		<div className='navbar-container'>
			<p className='logo'>
				<Link href='/'>JSM Headphones</Link>
			</p>
			<button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
      <FiShoppingCart />
				<span className='cart-item-qty'>{totalQuanitities}</span>
			</button>

		{showCart && <Cart />}
		</div>
	);
};

export default Navbar;
