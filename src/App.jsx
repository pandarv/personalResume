import { useRef, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HamburgerMenu } from './components/HamburgerMenu';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Portfolio } from './components/Portfolio';
import MenuLinks from './components/MenuLinks';
// import { useRef } from 'react';
import Error from './components/Error';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef();
	// console.log(menuRef);
	return (
		<div className='App'>
			{/* <MenuLinks /> */}
			<HamburgerMenu
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>

			<Routes>
				<Route
					path='/personalResume/'
					element={<Header />}
				/>
				<Route
					path='/resume'
					element={<Resume />}
				/>
				<Route
					path='/portfolio'
					element={<Portfolio />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='*'
					element={<Error />}
				/>
			</Routes>
			<div ref={menuRef}>
				<MenuLinks
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			</div>
			{/* {isOpen ? (
				<MenuLinks
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			) : (
				''
			)} */}
			<Footer />
		</div>
	);
}

export default App;
