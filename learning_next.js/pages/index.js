import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import HeadTag from '../components/HeadTag';


const index = () => {
    return (
        <Layout>
            <HeadTag title="Home Page" />
            <h2>Hello from Next JS</h2>
        </Layout>

    
    )
}

export default index
