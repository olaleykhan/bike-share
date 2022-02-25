import React from 'react';
import { useRouter } from 'next/router';
// import Image from "next/image"
import bikersData from "../data/bikers-data.json"

export async function getStaticPaths() {
    return {
        paths: bikersData.map(el => ({ params: { biker: el.id.toString() } })),
        fallback: false // false or 'blocking'
    };
}


export async function getStaticProps({ params }) {
    return {
        props: {
            data: bikersData.find(el => el.id.toString() === params.biker)
        }, // will be passed to the page component as props
    }
}

const Biker = ({ data }) => {
    console.log(data, "props in details page")
    const { id, name, address, imgUr, neighbourhood, websiteUrl } = data;

    return (
        <div>
            <h2> {name}</h2>
            <p> {address} </p>
            {/* <Image url={imgUr} /> */}

        </div>
    )
}

export default Biker