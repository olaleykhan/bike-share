import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => {
	return <Wrap>{children}</Wrap>;
};

const Wrap = styled.button`
	border: 2px solid ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.primary};
	padding: 1rem 2rem;
	border-radius: 2rem;

	&:hover {
		/* border: 2px solid ${({ theme }) => theme.primary}; */
		background-color: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.light};
	}
`;

export default Button;
