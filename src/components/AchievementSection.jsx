import React from 'react'
import data from "../data.json";

function AchievementSection({items, header, category}) {
  return (
		<div className="section-wrapper">
			<h2 className="achievement-header">{header}</h2>
			<hr className="divider" />
			<ul>
				{data.achievements[header].map((item, key) => (
					<li key={key} className="achievement-item">
						<p>
							{item.name}
							<br />
							{item.link && <a target="_blank" href={item.link}>{item.label}</a>}
						</p>
						{/* <p>{item.category}</p> */}
					</li>
				))}
			</ul>
		</div>
	);
}

export default AchievementSection