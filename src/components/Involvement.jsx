import React, { useRef } from "react";
import data from "../data.json";
import Card from "./Card";
import UpButton from "./UpButton";

function Involvement({elRef}) {

	const involvementWrapper = useRef({})

	return (
		<div
			id="involvement"
			ref={(el) => {
				elRef(el);
				involvementWrapper.current = el;
			}}
		>
			<h1>involvement</h1>
			{Object.keys(data.involvement).map((heading, index) => (
				<div key={index}>
					<h2>~ {heading}</h2>

					<div className="card-container">
						{data.involvement[heading].map((item, key) => (
							<Card
								key={key}
								year={item.year}
								event={item.events}
								name={item.name}
							/>
							// <Card key={key} year={item.year} event={item.events} name={item.name} />
						))}
					</div>
				</div>
			))}
			<UpButton heading={"#involvement"} wrapperRef={involvementWrapper} />
		</div>
	);
}

export default Involvement;
