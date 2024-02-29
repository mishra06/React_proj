// import Button from './Button'
import IMG from"../assets/card.avif"
import HoverButton from './HoverButton'

import './Card.css'

const Card =() =>{
    return(
        <div className='Card'>
            <div className='card_img'>
                <div className="imgs">
                    <img src={IMG} alt="" />
                </div>
            </div>
            <div className='card_right'>
                <div className="inner_text">
                    <h2 className='h2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                    <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <HoverButton />
                    
                </div>
                
                
            </div>
        </div>
    )

}

export default Card;
