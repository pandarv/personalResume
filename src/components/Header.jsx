import React from 'react';
import subject from '../assets/Subject 1.png';
import subject4x6 from '../assets/Subject_4x6.png';
import Desig from './Desig';
import { BackDesign } from './BackDesign';
export const Header = () => {
	return (
		<header>
			<img
				src={subject}
				alt='image of author'
			/>

			<article className='intro'>
				<h1>Hello,</h1>
				<p>
					My name is
					<span>
						<strong> Arvind Pandit</strong>
					</span>
					.
				</p>
			</article>
			<Desig />
			{/* <div className='desig'>
				<p>
					Web Developer <span className='brand-color'>/</span> Designer
				</p>
			</div> */}
			{/* <Menu /> */}
			<BackDesign />
		</header>
	);
};
