import './Footer.css'
import LOGO from '../assets/logoipsum.svg'
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { CiBasketball } from "react-icons/ci";

const Footer = () =>{

    return(
        <div className='footer'>
            <div className="foot_inner">
                <div className="inner_logo">
                    <img src={LOGO} alt="logo" />
                </div>
                <div className="para">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                </div>
                <div className="pages">
                    <span>About</span>
                    <span>Careers</span>
                    <span>History</span>
                    <span>Services</span>
                    <span>Projects</span>
                    <span>Blog</span>
                </div>

                <div className="links">
                    <span><FaFacebook /></span>
                    <span><BsInstagram /></span>
                    <span><BsTwitter /></span>
                    <span><VscGithubInverted /></span>
                    <span><CiBasketball /></span>
                </div>
            </div>
        </div>
    )

}

export default Footer;