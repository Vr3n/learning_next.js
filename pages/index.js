import React from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';


const index = () => {
    return (
        <div>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="My SEO React app with Next Js" />
                <meta name="keywords" content="Next react seo" />
                <meta name="author" content="Viren Patel" />
            </Head>
            <Navbar />
            <h2>Hello from Next JS</h2>
        </div>
    )
}

export default index
