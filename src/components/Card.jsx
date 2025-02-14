import React from 'react'

function Card({year, event}) {
  return (
    <div className='card-wrapper'>
        <p className='year'>{year}</p>
        <p className='event'>{event}</p>
    </div>
  )
}

export default Card