import React, { useEffect, useState } from "react";
import data from "../data.json";

function AchievementSection({ header, category }) {

	const initialValue = data.achievements[header];
	const [items, setItems] = useState(initialValue);

	useEffect(() => {
		if (category == "") {
			setItems(initialValue);
		} else {
			setItems(initialValue.filter((val) => val.category == category))
		}
	}, [category])

	if (items.length > 0) return (
		<div className="section">
			<h2 className="achievement-header">{header}</h2>
			<hr className="divider" />
			<ul>
				{items.map(
					(item, key) =>
						(category == "" || category == item.category) && (
							<li key={key} className="achievement-item">
								<p>
									{item.name}
									<br />
									{item.link && (
										<a target="_blank" href={item.link}>
											{item.label}
										</a>
									)}
								</p>
								{/* <p>{item.category}</p> */}
							</li>
						)
				)}
			</ul>
		</div>
	);
}

export default AchievementSection;
