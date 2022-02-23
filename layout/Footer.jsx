import React from 'react';
import styled from 'styled-components';

const date = new Date().getFullYear();
const Footer = () => {
	return <Foot> This Website is Created by Alaf {date} </Foot>;
};

const Foot = styled.footer`
	display: flex;
	padding: 1.5rem;
	justify-content: center;
	margin-top: auto;
`;
export default Footer;
