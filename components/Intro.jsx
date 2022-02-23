import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Intro = () => {
	return (
		<Wrap>
			<h1> Bike Share</h1>
			<p className='sub-title'> An intuitive way to link with other bikers and ride to the sunset collaboratively</p>
			<Button> View Bikers nearby</Button>
		</Wrap>
	);
};

const Wrap = styled.div`
	width: 100%;
	max-width: 600px;
	padding: 0 10px;
	margin-bottom: 4rem;
	/* @media only screen & (min-width: 1200) {
		max-width: 1800px;
		background-color: red;
	} */

	@media only screen and (min-width: 900px) {
		font-size: 20px;
		/* background-color: red; */
		max-width: 900px;
	}
`;

export default Intro;
