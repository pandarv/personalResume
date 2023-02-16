import React from 'react';
import { imageData } from '../resumeData';
import SingleProj from './SingleProj';

export const Portfolio = () => {
	return (
		<section className='page-setup'>
			<h1>Portfolio</h1>
			<article className='portfolio-container'>
				<div className='portfolios'>
					{imageData.map((sData) => {
						return (
							<SingleProj
								key={sData.id}
								proj={sData}
							/>
						);
					})}
				</div>
			</article>
		</section>
	);
};
