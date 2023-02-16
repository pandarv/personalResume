import React from 'react';

const SingleProj = ({ proj }) => {
	const { id, imagePath, gitLink, webLink, designLink } = proj;
	// const [isVisibile, setIsVisibile] = useState(true);

	return (
		<section
			className='proj one'
			style={{ backgroundImage: `URL(${imagePath})`, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}
		>
			<div style={{ width: '100%', height: '30%', backgroundColor: '#faa6a651', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', columnGap: '1rem' }}>
				{gitLink && (
					<a
						href={gitLink}
						target='_blank'
						rel='noopener noreferrer'
						className='btn'
					>
						Git
					</a>
				)}
				{webLink && (
					<a
						href={webLink}
						target='_blank'
						rel='noopener noreferrer'
						className='btn'
					>
						Website
					</a>
				)}
				{designLink && (
					<a
						href={designLink}
						target='_blank'
						rel='noopener noreferrer'
						className='btn'
					>
						Figma
					</a>
				)}
			</div>
		</section>
	);
};

export default SingleProj;
