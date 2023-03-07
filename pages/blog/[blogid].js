import Link from "next/link";

function BlogPage( {blog} ){


    return (
        <>
            <Link href="/blog">Back to blogs</Link>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>

        </>

    )

}

export default BlogPage;


export async function getStaticPaths(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    let data = await response.json();

    const paths = data.map((item) => ({
        params: { blogid: item.id.toString() },
      }))

    return {
        paths,
        fallback: false
    }

    

}


export async function getStaticProps(context){

    console.log('fetching the blog single');

    const {params} = context

    const blogid = params.blogid

    console.log('blog Id', blogid);

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogid}`)

    let data = await response.json();


    return {
        props: {
            blog : data
        }
    }

}