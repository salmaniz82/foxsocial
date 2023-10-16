import {motion} from 'framer-motion';
import Head from 'next/head';

import css from '../styles/contact.module.css';
import { useEffect, useState } from 'react';



function Contact(){

      const [formPayload, setFormPayload] = useState({
        firstname : "",
        lastname : "",
        email: "", 
        subject: "",
        message : ""
      });


     const handleChange = (e) => {


        const {name, value} = e.target;

        console.log(name, value);
        

        setFormPayload(oldValue => ({

            ...oldValue, [name]: value

        }))

      };


   

      

    return (
       
        <>        

        <Head>
            <title>Foxsocial - Contact </title>
            <meta type="description" content="meta description for content page here"/>
        </Head>

        <motion.section 

        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: .5}} 

        className="content-area header-clear">

            
        <h2 className="page-title font-AlegreyaSans">Contact</h2>
        
        <div className="page-details">

            <div className="contact_formWrapper">

                <div className="text">This is where text will go</div>

                <div className="contact__form">

                    
                    <form action="#" method="POST" className={css.floatable}>

                        <div className={css['dfx-2Col']}>
                        <div className={css['field_wrap']}>
                            <input 
                                type="text" 
                                name="firstname" 
                                className={`${css.floadField}  ${!formPayload.firstname.length ? (css['empty']) : (css['not-empty'])}`} 
                                id="firstname" 
                                value={formPayload.firstname}
                                onChange={handleChange}
                                
                                />
                            <label htmlFor="firstname" className={css['float-label']}>First name: </label>
                        </div>

                        <div className={css['field_wrap']}>
                            <input type="text" 
                                name="lastname" 
                                className={`${css.floadField}  ${!formPayload.lastname.length ? (css['empty']) : (css['not-empty'])}`} 
                                id="lastname" 
                                value={formPayload.lastname}
                                onChange={handleChange}
                                />
                            <label htmlFor="lastname" className={css['float-label']}>Last name:</label>
                        </div>

                        </div>


                        <div className={css['field_wrap']}>
                            <input 
                                type="email" 
                                name="email" 
                                className={`${css.floadField}  ${!formPayload.email.length ? (css['empty']) : (css['not-empty'])}`} 
                                id="email"
                                value={formPayload.email}
                                onChange={handleChange}

                                />
                            <label htmlFor="email" className={css['float-label']}>Email</label>
                        </div>

                        <div className={css['field_wrap']}>
                            <input 
                                type="text" 
                                name="subject" 
                                className={`${css.floadField}  ${!formPayload.subject.length ? (css['empty']) : (css['not-empty'])}`} 
                                id="subject"
                                value={formPayload.subject}
                                onChange={handleChange}
                                />
                            <label htmlFor="subject" className={css['float-label']}>Subject</label>
                        </div>

                        <div className={css['field_wrap']}>
                            <textarea className={css.floadField} id="textarea" name="message" onChange={handleChange}>

                            {formPayload.message}

                            </textarea>
                            <label htmlFor="textarea" className={css['float-label']}>Message</label>
                        </div>


                        <div className={css.submit__CTA}>
                            <button type="submit">SUBMIT</button>
                        </div>

                    </form>

                </div>

            </div>

            
        </div>


    </motion.section> 

    </>

    );

}

export default Contact;