import React from 'react';
import { FaGithubAlt, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

export const Footer = () => {
	return (
		<div className='footer'>
			<footer>
				<div className='footer-icons'>
					<a
						href='http://www.github.com/pandarv'
						target='_blank'
						rel='noopener noreferrer'
						className='footer-icons'
					>
						<FaGithubAlt />
					</a>

					<a
						href='http://www.linkedin.com/in/arvpandit/'
						target='_blank'
						rel='noopener noreferrer'
						className='footer-icons'
					>
						<FaLinkedinIn />
					</a>
					<a
						href='mailto:apandit1@ualberta.ca'
						className='footer-icons'
					>
						<FaPaperPlane />
					</a>
				</div>
			</footer>
		</div>
	);
};
