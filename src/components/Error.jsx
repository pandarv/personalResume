import React from 'react';
import { FaSadTear } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Error = () => {
	return (
		<section
			className='page-setup'
			style={{ placeItems: 'center', gridTemplateRows: '100%' }}
		>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<FaSadTear style={{ color: '#d65108', fontSize: '4rem' }} />
				<h1>Page does not found!!!</h1>
			</div>
		</section>
	);
};

export default Error;
