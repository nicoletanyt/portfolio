import React from 'react'
import Book from './Book'
import UpButton from './UpButton';
import data from "../data.json"

function Projects({ elRef }) {
	return (
		<div id="projects" ref={elRef}>
			<h1>projects</h1>
			<div className="project-wrapper">
				{data["projects"].map((project, key) => (
					<Book
						key={key}
						project={project}
						spanTwo={
							data["projects"].length % 2 == 1 &&
							key == data["projects"].length - 1
						}
					/>
				))}
			</div>
			{/* <UpButton heading={"#projects"} /> */}
		</div>
	);
}

export default Projects