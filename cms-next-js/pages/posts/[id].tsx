import Link from "next/link"
import styles from '../../styles/Home.module.scss'
import { useRouter } from 'next/router';

const {BLOG_URL} = process.env

async function getPost (id: number): Promise<any> {
    const res = await fetch(BLOG_URL + `${id}`).then(res => res.json())

    return res;
}

export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.id)
    return {
        props: {post},
        revalidate: 10,
    }
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}

type Post = {
    title: string,
    id: number,
    body: string,
}

const Post: React.FC<{ post: Post[] }> = (props) => {
    console.log(props)

    const { post } = props;

    const router = useRouter();

    return (
        <div className={styles.container}>
            {
                router.isFallback ? <h1>Loading...</h1> : 
                <>
                <Link href="/"><a>Go Back</a></Link>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                
                </>
            }
        </div>
    ) ;
}

export default Post;