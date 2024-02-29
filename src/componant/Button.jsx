import React from 'react'

const Button = (props) => { 
    return (
      <button 
          style={{
              color : props.fontColor,
              backgroundColor : props.backgroundKaColor,
              borderRadius : props.borderKaRadius,
              padding : props.padding,
              border :props.border,
              width :props.width
          }}
          className='button'
      >
          {props.children}
      </button>
    )
  }

  export default Button;


