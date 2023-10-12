import Head from "next/head"
import { motion } from "framer-motion";
import Link from "next/link";


function packages(){

    const packages = [

        {id: 1, title: "ENGAGE", "details": "text description here...", 

            features : [
            "Client & Account Managemet", 
            "Social Calender Building", 
            "Creative Social Strategy", 
            "Account Management",
            "Community Management",
            "Content Scheduling",
            "Content Curation",
            "Monthly Reporting",
            "Caption Copywriting"
        ]},

        {id: 2, title: "CREATE", "details": "text description here...", 

            features : [
            "Community package PLUS", 
            "Creative Social Strategy", 
            "TikTok & Reel Creation", 
            "Hashtag Strategy"
        ]},

        {id: 3, title: "GROW", "details": "text description here...", 

            features : [
            "Creation package PLUS", 
            "Social Campaing Ideation & Implementation", 
            "Influencer Management", 
            "Website Management",
            "Photoshoot Management"
        ]},
    ];

    return (

        <>

        <Head>
            <title>Foxsocial - Packages </title>
            <meta name="description" content="list of packages"/>
        </Head>

        <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: .5}} 
        className="content-area header-clear">
            
        <h2 className="page-title font-AlegreyaSans">PACKAGES</h2>
        
        <div className="page-details packages-detail-wrapper">

            

            <h3>Area of practice</h3>

            <div className="packagesInner">

                <div className="pacakgesList">

                
                {packages.map( (item, index) => 
                    
                    <div className="packageItem" key={item.id}>
                        <div className="packageTitle"><h4>{item.title}</h4></div>
                        <ul className="packageOutline">

                            {item.features.map((feature, index) => 
                                <li key={index}>{'- ' + feature}</li>
                            )}

                        </ul>
                        <div className="packages-CTA-wrap">
                            <Link href="/contact" className="packages-CTA">ENQUIRE</Link>
                        </div>
                        
                    </div>
                    
                )}

                </div>


            </div>   

            
        </div>


    </motion.section> 

    </>

    );

}

export default packages;
