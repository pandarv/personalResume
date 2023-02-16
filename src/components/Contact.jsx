import React from 'react';
import { FaLinkedinIn, FaGithubAlt, FaPaperPlane } from 'react-icons/fa';
export const Contact = () => {
	return (
		<section className='page-setup'>
			<h1>Contact</h1>
			<article className='contact-container'>
				<div className='contact'>
					<div>
						<div className='card-name'>
							<div className='circle'>
								<FaLinkedinIn />
							</div>
							<h4>LinkedIn</h4>
						</div>
						<div className='link'>
							<a
								href='http://www.linkedin.com/in/arvpandit/'
								target='_blank'
								rel='noopener noreferrer'
							>
								www.linkedin.com/in/arvpandit/
							</a>
						</div>
					</div>
					<div>
						<div className='card-name'>
							<div className='circle'>
								<FaGithubAlt />
							</div>
							<h4>GitHub</h4>
						</div>
						<div className='link'>
							<a
								href='http://www.github.com/pandarv'
								target='_blank'
								rel='noopener noreferrer'
							>
								www.github.com/pandarv
							</a>
						</div>
					</div>
					<div>
						<div className='card-name'>
							<div className='circle'>
								<FaPaperPlane />
							</div>
							<h4>Email</h4>
						</div>
						<div className='link'>
							<a href='mailto:apandit1@ualberta.ca'>apandit1@ualberta.ca</a>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};
