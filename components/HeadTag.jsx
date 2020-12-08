import Head from 'next/head'
import React from 'react'

const HeadTag = (props) => {
    return (
        <Head>
                <title>{props.title}</title>
                <meta name="description" content="My SEO React app with Next Js" />
                <meta name="keywords" content="Next react seo" />
                <meta name="author" content="Viren Patel" />
        </Head>
    )
}

export default HeadTag


