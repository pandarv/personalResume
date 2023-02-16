import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
	{ id: 1, name: 'home', to: '/' },
	{ id: 2, name: 'resume', to: '/resume' },
	{ id: 3, name: 'portfolio', to: '/portfolio' },
	// { id: 4, name: 'contact', to: '/contact' },
];

const MenuLinks = ({ isOpen, setIsOpen }) => {
	return (
		<nav
			onClick={(e) => e.target.localName === 'nav' && setIsOpen(false)}
			className={!isOpen ? 'inactive' : ''}
		>
			<ul className={isOpen ? 'active' : 'inactive'}>
				{menuItems.map((item) => {
					const { id, name, to } = item;
					return (
						<li
							key={id}
							onClick={() => setIsOpen(!isOpen)}
							className={isOpen ? 'active' : 'inactive'}
						>
							<Link
								className='nav-link'
								to={to}
							>
								<span>{id.toString().padStart(2, 0)}</span>
								<span>{name.charAt(0).toUpperCase() + name.slice(1, name.length)}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default MenuLinks;
