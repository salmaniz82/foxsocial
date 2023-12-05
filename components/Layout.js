import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children})  {

    return (

        <>

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
       </Head>

        <Header />
        
        {children}

        <Footer />

        </>
        


    )

}