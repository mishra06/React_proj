
import Logo from '../assets/logo.svg'
import './Navbar.css'
import Button from './Button'
const Navbar = () => {
    return(
        <>
            <nav className='navbar_sec'>
                <div className="navbar_logoSec">
                    <img src={Logo} alt="" />
                    <span>GeekFood</span>
                </div>
                <div className="Pages">
                    <span>Home</span>
                    <span>Quote</span>
                    <span>Resturants</span>
                    <span>Foods</span>
                    <span>Contact</span>
                </div>
                <div className="button_sec">
                <Button borderKaRadius={"10px"} backgroundKaColor={"#1C4ED8"} fontColor={"#FFFFFF"} padding={"9px 1rem"} border={"none"}>Get Started</Button>
                </div>
            </nav> 
        </>

    )
}

export default Navbar;