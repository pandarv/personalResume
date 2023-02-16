import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronDown } from 'react-icons/fa';
import SingleResumeComponent from './SingleResumeComponent';
import TechSkillItem from './TechSkillItem';

export const SingleResumeItem = ({ item, filterContent }) => {
	const [tech, setTech] = useState([]);
	const [nonTech, setNonTech] = useState([]);
	const [isShow, setIsShow] = useState(false);
	const { title, content } = item;
	useEffect(() => {
		if (title === 'technical-skills') {
			setTech(filterContent(title));
		}
		if (title !== 'technical-skills') {
			setNonTech(filterContent(title));
		}
	}, []);

	return (
		<div className='accordion-header'>
			<div
				className='accordion-item'
				onClick={() => setIsShow(!isShow)}
			>
				<a
					href={`#${title}`}
					className='accordion-title'
				>
					<div className='accordion-heading'>
						<span className='bullet'></span>
						<div style={{ letterSpacing: '1px' }}>{title.trim().replace('-', ' ')}</div>
					</div>
					{isShow ? <FaChevronDown style={{ color: '#efa00b' }} /> : <FaChevronLeft style={{ color: '#efa00b' }} />}
				</a>
			</div>

			<div className={isShow ? 'accordion-content' : 'accordion-content hide'}>
				{title === 'technical-skills' && (
					<ul>
						{tech.map((item, index) => {
							return (
								<TechSkillItem
									key={index}
									techSkill={item}
								/>
							);
						})}
					</ul>
				)}
				{title === 'education' && (
					<>
						{nonTech.map((item) => {
							const { id, programName, institute, city, province, startDate, EndDate } = item;
							return (
								<SingleResumeComponent
									key={id}
									headerName={programName}
									intitution={institute}
									city={city}
									province={province}
									startDate={startDate}
									endDate={EndDate}
								/>
							);
						})}
					</>
				)}
				{title === 'experiance' && (
					<>
						{nonTech.map((item) => {
							const { id, designation, companyName, city, province, startDate, endDate, responsibilities } = item;
							return (
								<SingleResumeComponent
									key={id}
									headerName={designation}
									intitution={companyName}
									city={city}
									province={province}
									startDate={startDate}
									endDate={endDate}
									responsibilities={responsibilities}
								/>
							);
						})}
					</>
				)}
			</div>

			{/* <div className='accordion-content'>{content}</div> */}
		</div>
	);
};
