
// import Hero from '../assets/hero.avif'
import Button from "../componant/Button"
import './HeroSec.css'

const HeroSec = () => {
   
    return (
      <div className='hero'>
         <div className="hero_img">
            {/* <img src={Hero} alt="" /> */}
         </div>

         <div className="info_sec">
            
            <h1>Let us find your <h1 className='h_red'>Forever Food.</h1></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className="button_sec">
                    <Button borderKaRadius={"4px"} backgroundKaColor={"#e11d48"} fontColor={"#FFFFFF"} padding={"15px 3rem"} border={"none"}>Search Now</Button>
                    <Button borderKaRadius={"4px"} backgroundKaColor={"#ffffff"} fontColor={"#e11d48"} padding={"15px 3rem"} border={"1px"}>Know More</Button>
                </div>
         </div>

         
      </div>
    )
  
}

export default HeroSec;
