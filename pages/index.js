import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
/*
import styles from '../styles/Home.module.css'
*/
import path from 'path';
import { promises as fs } from 'fs';
import { useEffect, useState } from 'react';
import CustomSlider from '../components/CustomSlider';



function Home({caseStudies}) {

  useEffect(function(){

    for(const obj of caseStudies){
      obj.isActive = false;
      
    }

  }, [])

  
 const [caseStudiesState, setCaseStudies] = useState(caseStudies)

  function handleCaseCTA(e, caseId){

    
      setCaseStudies( prevItems =>  
        prevItems.map(item => ({
    
          ...item,
          isActive : (item.id == caseId) ? true : false,
    
        }))
        
        );
    

    e.preventDefault();

  }

  return (
    <>
    <div className="container">
      <Head>
        <title>Foxsocial - Home Page</title>
      </Head>


      <div className="masongrid">

        {caseStudiesState.map( (caseStudy) => 

          <div key={caseStudy.id} className="item">
                
                <Image src={caseStudy.image} fill={true} className="caseImageNew" alt={caseStudy.title}/>

                {/*
                Using Template Literals (Recommended):
                <a className={`item-hover-contents ${caseStudy.isActive ? 'active' : 'no-active'}`}>
                #Using String Concatenation:
                */}

            <a className={"item-hover-contents " + (caseStudy.isActive ? 'active' : 'no-active') }  href={'/case/'+caseStudy.slug} onClick={(e) => {handleCaseCTA(e, caseStudy.id)}}>
                <div className="item-inner">
                    <h3>{caseStudy.title}</h3>
                    <p>-[ {caseStudy.metaDesc} ]-</p>
                </div>                   
            </a>
        </div>

          
        
        )}
        

      </div>

      

      </div>   


      <section className="testimonial-section">

          <div className="testimonial-section-inner">

            <h3 className="text-center">LOVE LETTERS</h3>

          

            <CustomSlider />

          </div>

      </section>


      

      


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
