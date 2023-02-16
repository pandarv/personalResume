import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from '../context/context';

export const HamburgerMenu = ({ isOpen, setIsOpen }) => {
	const { isMenuOpen } = useGlobalContext;
	// const [isTrue, setIsTrue] = useState(false);
	return (
		<div
			className={isOpen ? 'hamburger-menu active' : 'hamburger-menu'}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className='hamburger-line'></div>
		</div>
	);
};
