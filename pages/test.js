import path from 'path';
import { promises as fs } from 'fs';



export default function test ( props ) {


    
    console.log(props)
    

    return (
        <>
        <h1>testing</h1>

        {props.data.map(project => {

           return <p key={project.id}>{project.title}</p>

        })}
        

        </>
    )

}


export async function getServerSideProps(context) {

    const jsonDirectory = path.join(process.cwd(), 'data');

    const fileContents = await fs.readFile(jsonDirectory + '/casedatav3.json', 'utf8');

    return {
      props: {
        data : JSON.parse(fileContents)
      }
       // will be passed to the page component as props
    }
  }