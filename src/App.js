import React from 'react';

function App() {
	return (
		<main className='p-3 font-thin leading-tight tracking-tight text-navy md:text-[3vw] sm:text-[8vw] p:text-[6vw]'>
			<p className='font-medium'>Scapin Tobia</p>
			<p>Product & Service Designer</p>
			<div className='py-16'>
				<p>
					<a href='tel:+393402100166'>+39 3402100166</a>
				</p>
				<a href='mailto:info@scapintobia.xyz?subject=New%20opportunity'>
					info@scapintobia.xyz
				</a>
			</div>

			{/* <p>
				<a
					href='https://www.figma.com/proto/6R5OdeSV3BwrBeUsjWQ19M/Portfolio?page-id=0%3A1&node-id=2%3A2&viewport=1446%2C94%2C0.09&scaling=contain'
					target='_blank'
					rel='noopener noreferrer'>
					Portfolio
				</a>
			</p> */}

			<p>
				<a
					href='https://www.linkedin.com/in/scapintobias'
					target='_blank'
					rel='noopener noreferrer'>
					Linkedin
				</a>
			</p>
		</main>
	);
}

export default App;
