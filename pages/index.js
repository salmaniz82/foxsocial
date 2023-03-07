import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import styles from '../styles/Home.module.css'
import path from 'path';
import { promises as fs } from 'fs';


function Home({caseStudies}) {
  return (
    <>
    <div className="container">
      <Head>
        <title>Foxsocial - Home Page</title>
      </Head>


      <div className="masongrid">

        {caseStudies.map( (caseStudy) => 

          <div key={caseStudy.id} className="item"  style={{backgroundImage: `url(${caseStudy.image})`}}>
                <div className="position-index">first item</div>
            <Link className="item-hover-contents" href={'/case/'+caseStudy.slug}>
                <div className="item-inner">
                    <h3>{caseStudy.title}</h3>
                    <p>— view —</p>
                </div>                   
            </Link>
        </div>

          
        
        )}
        

      </div>

      

      </div>   
    </>
  )
}


export default Home



export async function getStaticProps(context) {

  const jsonDirectory = path.join(process.cwd(), 'data');

    const fileContents = await fs.readFile(jsonDirectory + '/casedatav3.json', 'utf8');

    return {
      props: {
        caseStudies : JSON.parse(fileContents)
      }
       // will be passed to the page component as props
    }

}
