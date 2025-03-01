import React from 'react'
import Book from './Book'
import UpButton from './UpButton';
import data from "../data.json"

function Projects() {
  return (
		<div id="projects">
			<h1>projects</h1>
			<div className="project-wrapper">
				{data["projects"].map((project, key) => (
					<Book key={key} project={project} />
				))}
			</div>
			{/* <UpButton heading={"#projects"} /> */}
		</div>
	);
}

export default Projects