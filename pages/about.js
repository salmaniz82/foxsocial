import Head from "next/head"
import { motion } from "framer-motion";


function About(){


    let pageMetaContent = "fox social about page details";

    return (

        <>

        <Head>
            <title>Foxsocial - About </title>
            <meta name="description" content={pageMetaContent}/>
        </Head>

        <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: .5}} 
        className="content-area header-clear">
            
        <h2 className="page-title font-AlegreyaSans">ABOUT</h2>
        
        <div className="page-details">
            <p>Pellentesque ac pulvinar ante. Cras porttitor lorem ex, vitae iaculis ligula vehicula sed. Vivamus mollis molestie elit, eu mattis lacus sollicitudin at. Nam id velit est. Quisque id nulla et purus vestibulum ornare. Morbi gravida ipsum felis, a scelerisque velit varius a. Integer ut ipsum tortor. Donec in sapien nec nibh suscipit euismod.</p>

             <p>Duis suscipit vulputate hendrerit. Vestibulum purus lorem, tristique quis commodo ut, tincidunt consequat sem. Aliquam at quam ac magna lacinia faucibus. In nec convallis tortor. Sed ut placerat felis. Nullam vulputate aliquam diam vehicula finibus. Fusce egestas gravida venenatis. Quisque faucibus sapien enim, in elementum elit facilisis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>   

             <p>Fusce consectetur quis libero ac tincidunt. Donec efficitur nulla non quam ullamcorper volutpat. Phasellus semper gravida libero et laoreet. Aenean viverra nulla eget risus tempor consequat. Phasellus auctor nibh nec felis condimentum placerat. Quisque consectetur, lectus sit amet malesuada luctus, arcu massa vestibulum mi, ac rhoncus ligula nisi a ante. Donec lacinia massa non vulputate consectetur.</p>
        </div>


    </motion.section> 

    </>

    );

}

export default About;
