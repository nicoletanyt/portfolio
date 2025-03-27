import React, { useState } from 'react'

function Word({word, text, scale}) {
  
    const style = {
        fontSize: `${(word.size / scale)}em`,
        left: `${word.x * scale}px`,
        top: `${word.y * scale}px`,
        rotate: word.rotation + "deg",
    };

  return (
		<p
			className="word animate__bounceInUp animate__animated animate__slow"
			style={style}
		>
			{text}
		</p>
	);
}

export default Word