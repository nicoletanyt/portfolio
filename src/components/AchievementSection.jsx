import React, { useEffect, useState, useRef } from "react";
import data from "../data.json";

function AchievementSection({ header, category }) {

	const initialValue = data.achievements[header];
	const [items, setItems] = useState(initialValue);

	const sectionBody = useRef(null)
	const [sticky, setSticky] = useState(false)

	useEffect(() => {
		if (category == "") {
			setItems(initialValue);
		} else {
			setItems(initialValue.filter((val) => val.category == category))
		}
	}, [category])

	useEffect(() => {
		if (sectionBody) {
			setSticky(sectionBody.current.clientHeight > 500)
		}
	}, [])
	

	if (items.length > 0) return (
		<div className="section" ref={sectionBody}>
			<h2
				className={"achievement-header ".concat(sticky && "scroll-sticky")}
			>
				{header}
			</h2>
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
							</li>
						)
				)}
			</ul>
		</div>
	);
}

export default AchievementSection;
