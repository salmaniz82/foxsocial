import Image from 'next/image'
import Link from 'next/link';
function Footer(){

    return (

    
<footer>

    <div className="footer-info">

    <div>
        <div className="footer-section-header">CONTACT INFO</div>
        <div>Address : 777 Nameless Ave, New York, NY 00000</div>
        <div>Tel: <a href="tel:+15555555782">+1 555 555 5782</a></div>
        <div>Email: <a href="mailto:info@foxsocial.com" className="td-none">info@foxsocial.com</a></div>
        
    </div>   

    <div className="quickLinks">
        <div className="footer-section-header">QUICK LINKS</div>
        <div><Link href="/about">About</Link></div>     
        <div><Link href="/privacy-policy">Privacy Policy</Link></div>     
        <div><Link href="/terms-service">Terms of service</Link></div>
    </div>

    <div>
        <div className="footer-section-header social-header">SOCIAL LINKS</div>
        <div className="social-icon-wrapper">
            
            <a href="#"><Image src="/images/social/Facebook-02.svg" width={30} height={30} alt="Facebook Icon"/></a> 
            <a href="#"><Image src="/images/social/Instagram-02.svg" width={30} height={30} alt="Instagram Icon" /></a>
            <a href="#"><Image src="/images/social/Twitter-02.svg" width={30} height={30} alt="Twitter Icon" /></a>
        </div>

        <div className="copyright-info">Copyright FoxSocial © 2022</div>
        
    </div>
        
    </div>


</footer>

    );

}

export default Footer;