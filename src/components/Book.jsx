import React, { useState } from 'react'
import {
	IoIosArrowDroprightCircle,
	IoIosArrowDropleftCircle,
} from "react-icons/io";

function Book({project, spanTwo}) {
    const [front, setFront] = useState(true)

  return (
		<div
			className={`book ${spanTwo && "span-two"}`}
			// onMouseEnter={() => setFront(false)}
			// onMouseLeave={() => setFront(true)}
		>
			<span className="language">{project.language}</span>
			<div
				className={"front ".concat(
					front
						? "animate__slideInLeft animate__animated animate__faster book-show"
						: "book-hide"
				)}
			>
				<img src={project.image} />
				<p className="project-name">{project.name}</p>
			</div>
			<div
				className={"back ".concat(
					front
						? "book-hide"
						: "animate__slideInRight animate__animated book-show"
				)}
			>
				<p>{project.description}</p>
				<a target="_blank" className="link" href={project.link}>
					{project.label}
				</a>
			</div>
			{front ? (
				<IoIosArrowDroprightCircle
					className="arrow-icon"
					onClick={() => setFront(!front)}
				/>
			) : (
				<IoIosArrowDropleftCircle
					className="arrow-icon"
					onClick={() => setFront(!front)}
				/>
			)}
		</div>
	);
}

export default Book