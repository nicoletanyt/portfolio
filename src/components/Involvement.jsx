import React from "react";
import data from "../data.json";
import Card from "./Card";

function Involvement() {
	return (
		<div id="involvement">
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
		</div>
	);
}

export default Involvement;
