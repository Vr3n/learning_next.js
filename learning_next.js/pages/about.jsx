import React from 'react';
import HeadTag from '../components/HeadTag';
import Layout from '../components/Layout';




const about = () => {
    return (
        <Layout>
            <HeadTag title="About Page" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam autem sapiente atque dolores consequuntur. Quod, in modi. Magnam, aliquam, sequi molestias perspiciatis laudantium numquam, at ratione voluptate accusamus quis veniam.</p>

            <style jsx>
                {`p {
                    color: indigo;
                    font-size: 20px;
                }
                span {
                    border-left: 5px solid black;
                    color: red;
                    cursor: pointer;
                }
                `}
            </style>

        </Layout>
    )
}

export default about
