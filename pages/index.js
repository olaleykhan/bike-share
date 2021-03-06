import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro';
import Bikers from '../layout/home/Bikers';
import styles from '../styles/Home.module.css';
import bikersData from "../data/bikers-data.json"

export async function getStaticProps(context) {
	return {
		props: {
			bikersData,
		}, // will be passed to the page component as props
	};
}
export default function Home({ bikersData }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Bike share Landing page</title>
				<meta name='description' content='bike share app created by Alaf ud' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Intro />
			<Bikers data={bikersData} />
		</div>
	);
}
