import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

// import cls from 'classnames';

const Card = ({ id, name, imgUrl }) => {
	return (
		<Link href={`${id}`} passHref>
			<MyLink>
				<Wrap>
					{' '}
					<div className={`cardHeaderWrapper`}>
						<h2 className={`cardHeader`}>{name}</h2>
					</div>
					<div className={`cardImageWrapper`}>
						<Image alt={name} className={`cardImage`} src={imgUrl} width={260} height={160} />
					</div>{' '}
				</Wrap>
			</MyLink>
		</Link>
	);
};

const MyLink = styled.a`
	margin: auto;
	--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
	box-shadow: 0 0 transparent, 0 0 #0000, 0 0 transparent, 0 0 #0000, 0 0 transparent;

	/* border-color: var(--text-white-100); */
	border-radius: 0.75rem /* 12px */;
`;
const Wrap = styled.div`
	border-radius: 0.75rem /* 12px */;
	padding-top: 0.25rem /* 4px */;
	padding-bottom: 0.25rem /* 4px */;
	padding-bottom: 1.25rem /* 20px */;
	padding-left: 1rem /* 16px */;
	padding-right: 1rem /* 16px */;
	height: 100%;

	backdrop-filter: blur(10px);
	.cardHeaderWrapper {
		margin-top: 0.75rem /* 12px */;
		margin-bottom: 0.75rem /* 12px */;
	}

	.cardHeader {
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 1.25rem /* 20px */;
		line-height: 1.75rem /* 28px */;
		font-weight: 800;
		overflow: hidden;
		width: 16rem /* 256px */;
	}

	.cardImageWrapper {
		color: var(--text-white-100);
	}

	.cardImage {
		border-radius: 0.75rem /* 12px */;
	}
`;

export default Card;
