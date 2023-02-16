import React from 'react';

const SingleResumeComponent = ({ headerName, startDate, endDate, intitution, city, province, responsibilities }) => {
	// console.log(responsibilities);
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', gap: '1rem' }}>
				<div>
					<p style={{ fontWeight: '700' }}>{headerName}</p>
					<p style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '1px', padding: '0.5rem' }}>
						{intitution}, {city}, {province}
					</p>
				</div>
				<p>
					{startDate} - {endDate}
				</p>
			</div>
			{responsibilities && (
				<ul style={{ marginBlock: '1rem', paddingBottom: '1rem' }}>
					<h4 style={{ fontSize: '0.8rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', marginBlock: '1rem' }}>Responsibilities</h4>
					{responsibilities.map((item, index) => {
						return (
							<li
								key={index}
								style={{ listStyleType: 'disc', marginLeft: '2rem', marginBottom: '0.5rem', lineHeight: '1.2', letterSpacing: '0.5px' }}
							>
								{item}
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};

export default SingleResumeComponent;
