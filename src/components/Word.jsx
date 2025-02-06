import React from 'react'

function Word({word, text}) {

    const style = {
        fontSize: word.size * 10,
        left: "calc(" + word.x + "*.3%)",
        top: word.y * 1.5,
        rotate: word.rotation + "deg",
    };

  return (
    <p className="word" style={style}>
        {text}
    </p>
  )
}

export default Word