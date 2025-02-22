import React from 'react'

function Card({year, event, name}) {
  
  return (
		<div
			className={"card-wrapper ".concat(typeof event == "string" && "single")}
		>
			<p className="year">{year}</p>
			{typeof event == "string" ? (
				<p className="event single">{event}</p>
			) : (
				<div className="multiline">
					<p className='name'>{name}</p>
					<ul className="event">
						{event.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default Card