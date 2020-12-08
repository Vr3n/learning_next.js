const { default: Head } = require("next/head")
const { default: Link } = require("next/link")

const firstPost = () => {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </>
    )
    
}

export default firstPost;