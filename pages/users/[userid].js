import Link from "next/link";

export default function userDetail ({user}) {

    return (
        
        <>
        <Link href="/users">Back to users</Link>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.webiste}</p>
        <p>{user.company?.name}</p>
        </>
    )
}


export async function getServerSideProps(context){

    const {params} = context

    const userid = params.userid

    console.log('userid', userid);

    let fetchUrl = `https://jsonplaceholder.typicode.com/users/${userid}`

    const response = await fetch(fetchUrl)

    let responeJson = await response.json();



    return {
        props : {
            user: responeJson
        }
    }


}