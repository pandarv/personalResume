import React from 'react';
import { SingleResumeItem } from './SingleResumeItem';
import { resumeData } from '../resumeData';
export const Resume = () => {
	const filterContent = (id) => {
		const filterArr = resumeData.filter((item) => item.title === id);
		const [title] = filterArr;

		return title.content;
	};
	return (
		<section className='page-setup'>
			<h1>Resume</h1>

			<div className='accordion'>
				{resumeData.map((item, index) => {
					return (
						<SingleResumeItem
							key={index}
							item={item}
							filterContent={filterContent}
						/>
					);
				})}
			</div>
		</section>
	);
};
