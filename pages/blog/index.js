import Link from "next/link";

export default function blog({blogs}){

    return (
        <>
        
        <h1>This is the master blog listing page</h1>

        <div className="blog-items">

        {blogs.map( blog =>  

            <div key={blog.id} className="blog-item">
                <h2>{blog.title}</h2>

                <Link href={`/blog/${encodeURIComponent(blog.id)}`}>
                    Read more
                </Link>
                
                
            </div>

        )}
        
        </div>

        </>
    )

}


export async function getStaticProps(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let blogs = await response.json();
   
    return {
        props: {
            blogs : blogs
        }
    }

}
