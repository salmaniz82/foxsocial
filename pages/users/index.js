import Link from "next/link";

export default function users({users}){


    return (
        <>

        <h1>List of users here</h1>

        {users.map(user => 

        <div key={user.id} className="user-item">

            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <div> <Link href={`/users/${encodeURIComponent(user.id)}`}>user detail</Link> </div>

        </div>

            
        )}




        </>
    )

}


export async function getServerSideProps(){

    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    let data = await response.json();

    return {
        props : {
            users : data
        }
    }

}