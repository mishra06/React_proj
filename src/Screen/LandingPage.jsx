import Navbar from "../componant/Navbar"
import HeroSec from "./HeroSec";
import Card from "../componant/Card";
import Grid from "../componant/Grid";
import Footer from "../componant/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate()
    return(
        <>
        <Navbar />
        <HeroSec />
        <Card />
        <Grid />
        <button onClick={()=>{
            navigate('/Quotes')
        }}>redirect</button>
        
        <Footer/>
        </>
    )

}

export default LandingPage;