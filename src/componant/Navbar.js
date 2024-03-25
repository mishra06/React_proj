
import Logo from '../assets/logo.svg'
import './Navbar.css'
import Button from './Button'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return(
        <>
            <nav className='navbar_sec'>
                <div className="navbar_logoSec">
                    <img src={Logo} alt="" />
                    <span>GeekFood</span>
                </div>
                <div className="Pages">
                    <span><NavLink to="/home" style={{textDecoration:'none', color:'green'}}>Home</NavLink></span>
                    <span><NavLink to='/Quotes' style={{textDecoration:'none'}}>Quote</NavLink></span>
                    <span><NavLink to='/Restaurant' style={{textDecoration:'none'}}>Resturants</NavLink></span>
                    <span><NavLink to='/Foods' style={{textDecoration:'none'}}>Foods</NavLink></span>
                    <span><NavLink style={{textDecoration:'none'}}>Contact</NavLink></span>
                </div>
                <div className="button_sec">
                <Button borderKaRadius={"10px"} backgroundKaColor={"#1C4ED8"} fontColor={"#FFFFFF"} padding={"9px 1rem"} border={"none"}>Get Started</Button>
                </div>
            </nav> 
        </>

    )
}

export default Navbar;