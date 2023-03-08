import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image'



function Header(){


    let location = useRouter()
    let [menuState, setMenuState] = useState(false);

    useEffect( () => {
       
        setMenuState( menuState => !menuState );

    }, [location])

    

    
    let handleToggle = (e)=>{
        e.preventDefault();
        setMenuState( menuState => !menuState );
    }

        return (

        <header role="main" className={(menuState) ? 'menu-open' : ''}>

            <nav>
                <ul className="primary-navigation">
                    <li>
                        <Link className={location.pathname == '/work' ? 'active': '' } href="/work" >WORK</Link>
                    </li>
                    <li>
                        <Link className={location.pathname == '/services' ? 'active': '' } href="/services" >SERVICES</Link>
                    </li>
                    <li>
                        <Link className={location.pathname == '/contact' ? 'active': '' } href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
    
            <h1 id="main-logo-lg">
                <Link href="/">
                    
                    <Image src="/images/fox-images/foxsocial-logo.png" width={144} height={72} alt="FoxSocial Logo" />
                </Link>

                
                    
                </h1>
            <div>
    
                <ul className="right-menu-items">
                    <li>
                        <Link className={location.pathname == '/about' ? 'active': '' } href="/about">ABOUT</Link>
                    </li>
                    <li>
                    <Link className={location.pathname == '/mission' ? 'active': '' } href="/mission">MISSION</Link>
                    </li>
                    <li><Link className={location.pathname == '/vision' ? 'active': '' } href="/vision">VISION</Link></li>
                </ul>
            </div>
    
            <a href="#" id="menu-toggle" onClick={handleToggle}></a>
    
        </header>

        );

}

export default Header;