import React from 'react'

const Card = (props) => {
  return (
    <div className={`${props.className}`} style={cardStyle}>{props.children}</div>
  )
}

const cardStyle = {
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.26)', 
    borderRadius: '10px',
}

export default Card;
