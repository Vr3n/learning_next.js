import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

const {BLOG_URL} = process.env


type Post = {
  title: string,
  id: number,
}


async function getPosts () {
  const res = await fetch(BLOG_URL).then((res) => res.json())

  const posts = res;
  console.log(posts);

  return posts
}

// Extracting content from API.

export const getStaticProps = async ({ params }): Promise<{ props: { posts: any; }; }> => {
  const posts = await getPosts();
  return {
    props: {posts},
    revalidate: 10,
  }

}

const Home:React.FC<{ posts: Post[] }> = (props) => {

  const { posts } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello Friend!</h1>
      <ul>
        {posts.map((post): JSX.Element => 
          (
          <li key={post.id} >
            <Link href="/posts/[id]" as={`/posts/${post.id}`} ><a>{post.title}</a></Link>
            </li>
            )
          )}
      </ul>
    </div>
  )
}


export default Home;