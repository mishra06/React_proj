import React from 'react'
import './QuoteCard.css'

const QuoteCard = (props) => {
  return (
    <div className="Card_containers">

      <p> {props.description}</p>
      <span className="cont_text">{props.author}</span>

    </div>
  )
}

export default QuoteCard
