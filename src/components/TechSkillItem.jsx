import React from 'react';

const TechSkillItem = ({ techSkill }) => {
	return (
		<>
			{Object.keys(techSkill).map((item) => {
				return (
					<li
						key={item}
						style={{ paddingBlock: '0.5rem' }}
					>
						<h4 style={{ fontSize: '0.8rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', marginBlock: '0.6rem' }}>{item}</h4>
						<p style={{ textIndent: '2rem', fontSize: '0.9rem', letterSpacing: '1px' }}>{techSkill[item]}</p>
					</li>
				);
			})}
		</>
	);
};

export default TechSkillItem;
