import path from 'path';
import { promises as fs } from 'fs';
import { motion } from "framer-motion";
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head';

function Casedetail({caseStudy, caseStudies}){

    const router = useRouter()

    const {caseSlug} = router.query

    const totalCases = caseStudies.length;
    let currentIndex = caseStudies.findIndex(caseStudy => caseStudy.slug === caseSlug);
    

    let haveNext = () => {
      return ((totalCases - currentIndex) === 1) ? false : true;
    }

    let hasPrevious = () => {
      return (currentIndex == 0) ? false : true;
    }

    let previousSlug = () => {
      let prevIndex = currentIndex - 1;
      let prevSlug = caseStudies[prevIndex].slug;
      return prevSlug; 
    }




  let nextSlug = () => {
      let nextIndex = currentIndex + 1;
      let nextSlug = caseStudies[nextIndex].slug;
      return nextSlug;
  }
  
  let casePageTitle = `Foxsocial ${caseStudy.title}`;

  let ogUrl = `https://foxsocial.vercel.app/case/${caseStudy.slug}`;

  
  

    return (

      <>

      <Head>
        <title>{casePageTitle}</title>
        <meta name="description" content={caseStudy.metaDesc} key="desc"/>
        <meta property="og:title" content={casePageTitle}/>
        <meta property="og:description" content={caseStudy.metaDesc} />
        <meta property="og:url" content={ogUrl} />
      </Head>
        
      <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="content-area header-clear">

      <div className="page-details caseWrapper">

          <div className="caseNavWrapper">
              {hasPrevious() && <Link className="prev-case" href={'/case/'+previousSlug()}> ❮ </Link>}
              {haveNext() && <Link className="next-case" href={'/case/'+nextSlug()}> ❯ </Link>}  
          </div>

          <div className="caseImage"

              initial={{ opacity: 0, x: 100  }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .5 }}
          
          >
              <Image src={`${caseStudy.image}`}  alt="{caseStudy.title}" width={1000} height={1000}/>
              
          </div>

          <div className="caseDetails">
            
              <motion.h2 className="page-title"
              initial={{x:100, opacity: 0}}
              animate={{x:0, opacity: 1}}
              exit={{y:100, opacity: 0}}
              transition={{duration: .5}}
              >{caseStudy.title}</motion.h2>   
              <motion.div 
              initial={{y:20, opacity: 0}}
              animate={{y:0, opacity: 1}}
              exit={{y:-20, opacity: 0}}
              transition={{duration: 1}}
              dangerouslySetInnerHTML={ {__html: caseStudy.description} }>
                  
              </motion.div>
          </div>
          
      </div>


  </motion.section> 

  </>

    )

}


export default Casedetail


export async function getStaticPaths() {

  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/casedatav3.json', 'utf8');

  let caseStudiies = JSON.parse(fileContents)

  const paths = caseStudiies.map( (caseStudy) => ({
     params: { caseSlug : caseStudy.slug },
  }))

  return {

    paths,
    fallback : false

  }
}


export async function getStaticProps(context){

  let caseSlug = context.params.caseSlug

  const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + '/casedatav3.json', 'utf8');

    let caseStudies = JSON.parse(fileContents)

    let currentIndex = caseStudies.findIndex(caseStudy => caseStudy.slug === caseSlug);

    let caseStudy = caseStudies[currentIndex];

    return {
      props : {
        caseStudy : caseStudy,
        caseStudies : caseStudies
      }
    }

}