import React from 'react';
// import subject from '../assets/Subject 1.png';

const menuItems = [
	{ id: 1, name: 'resume' },
	{ id: 2, name: 'portfolio' },
	// { id: 3, name: 'contact' },
];
export const BackDesign = () => {
	return (
		<>
			{/* <img
				src={subject}
				alt='image of author'
			/>
			{menuItems.map((item) => {
				return <p key={item.id}>{`${item.id.toString().padStart(2, 0)}-  ${item.name.charAt(0).toUpperCase()}${item.name.slice(1, item.name.length)}`}</p>;
			})} */}
			<div className='grid-container'>
				<div className='menu-container'>
					<div className='area-one all-b'></div>
					<div className='area-one'></div>
					<div className='area-one'></div>
					<div className='area-one'></div>
					<div className='area-two'></div>
					<div className='area-two'></div>
					<div className='area-two'></div>
					<div className='area-two'></div>
					<div className='area-three'></div>
					<div className='area-three'></div>
					<div className='area-three'></div>
					<div className='area-three'></div>
					<div className='area-four'></div>
					<div className='area-four'></div>
					<div className='area-four'></div>
					<div className='area-four'></div>
				</div>
			</div>
			{/* <div className='area-one'></div>
			<div className='area-one'></div>
			<div className='area-one'></div>
			<div className='area-one'></div> */}
		</>
	);
};
