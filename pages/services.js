import Head from "next/head"
import { motion } from "framer-motion";
import Image from 'next/image';
import styles from '/styles/services.module.css'



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/swiper-bundle.css';


const serivesItems = [
    {
        id: 1,
        title : "client & account management",
        details: "We manage your social media accounts so you can focus on running your business. We dedicate our time to seamlessly act on behalf of your business,  providing a personalised service and ensuring your brand's online presence aligns with your goals.",
        image: "/images/services/client-account management.png"
    }, 

    {
        id: 2,
        title : "social calendar building",
        details: "We create a comprehensive social calendar to streamline your content and ensure consistent engagement. This includes planning posts for holidays, promotions, and special events.",
        image: "/images/services/social-calendar-building.jpg"
    }, 

    {
        id: 3,
        title : "creative social strategy",
        details: "Our team devises innovative and current strategies tailored to your brand, driving engagement and growth. We analyze trends and audience behaviour to optimise your social media impact.",
        image: "/images/services/creative-social-strategy.jpg"
    }, 
    {
        id: 4,
        title : "campaign ideation & implementation",
        details: "We believe in the power of storytelling and will craft captivating narratives around your significant moments or events to capture the attention of your target audience. By leveraging these moments, we create a connection that goes beyond marketing, allowing your brand to resonate with your audience on a deeper level.",
        image: "/images/services/campaign-ideation.jpg"
    }, 
    {
        id: 5,
        title : "account & community management",
        details: "We will continuously manage and nurture key customer relationships on your social channels. We’ll handle all aspects of your account management needs, ensuring that your online presence remains active, engaging, and relevant. We will increase your brand’s visibility and attract potential customers or clients through strategic commenting, liking, and engaging with others.",
        image: "/images/services/account-community-management.jpeg"
    }, 
    {
        id: 6,
        title : "influencer management",
        details: "We connect your brand with influencers who resonate with your audience. Our team manages the entire process, from identifying potential influencers, negotiating contracts, to tracking campaign performance.",
        image: "/images/services/influencer-management.jpg"
    }, 
    {
        id: 7,
        title : "content creation",
        details: "Our comprehensive content creation services cover everything you need to create engaging and visually stunning content for your brand. From start to finish, we handle every aspect, ensuring high-quality results that captivate your audience.  From large-scale shoots to iPhone content and graphic design, we have the expertise and resources to deliver exceptional content that resonates with your audience.",
        image: "/images/services/content-creation.jpg"
    }, 
    {
        id: 8,
        title : "content curation",
        details: "Content curation is essential to maintaining a strong and cohesive online presence. We ensure that your social channels are aesthetically aligned with your brand and consistently portray a high-quality business image. We meticulously select and curate content that resonates with your target audience and reflects your brand's values and messaging.",
        image: "/images/services/content-curation.jpg"
    }, 
    {
        id: 9,
        title : "content curation",
        details: "From website content to blogs, newsletters, and Instagram captions, we craft compelling and engaging copy that captivates your audience and drives results by compelling them to take action, whether liking, sharing, or clicking a link. You can ensure consistent and compelling messaging across your digital platforms by leveraging our copywriting services.",
        image: "/images/services/copywriting.jpeg"
    }, 
    {
        id: 10,
        title : "website management",
        details: "By entrusting us with the management of your website, you can rest assured knowing that you have a dedicated team working diligently to ensure your online presence is consistent across all channels.  We understand the importance of keeping your website relevant and engaging, which is why we prioritize regular updates and improvements.",
        image: "/images/services/website-management.jpg"
    }, 

];


function services(){

    return (

        <>

        <Head>
            <title>Foxsocial - Services </title>
            <meta name="description" content="meta description for content sercives here"/>
        </Head>

        <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: .5}} 
        className="content-area header-clear">
            
        <h2 className="page-title font-AlegreyaSans">Features Overview</h2>
        
        <div className="page-details">


            <div class="services-items">


            <Swiper
            modules={[Navigation, Pagination, ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}       
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
        
                
                

                {serivesItems.map(item => (

                <>
                <SwiperSlide key={item.id} className="service-item">
                    <h3 className="text-center">{item.title}</h3>
                <div class="ser-img-wrap">
                        {/**
                         * <Image src={item.image} placeholder={item.image} alt={"Service Image"} fill objectFit="contain"></Image> 
                        */}
                    <img src={item.image} alt={"Service Image"} />                       
                    </div>
                    
                    <p className="text-center">{item.details}</p>
                </SwiperSlide>
                    </>

                    ))}
    
             </Swiper>
                

                

                
                    
            </div>

            



        </div>


    </motion.section> 

    </>

    );

}

export default services;
