import React, { useEffect, useState } from 'react'
import data from "../data.json"
import Word from './Word'

function WordCloud() {
	const [scale, setScale] = useState(0);

	// TODO: add event listener for when window resizes, then change scale accordingly

	// width > 1500: scale = 2
	// width > 1000: scale = 1.6

	const resizeScale = () => {
		if (screen.width > 1500) setScale(1.8)
		else if (screen.width > 1000) setScale(1.6)
		else if (screen.width > 700) setScale(1.4)
		console.log(screen.width, screen.height)
	}

	useEffect(() => {
		console.log(scale)
	}, [scale])

	useEffect(() => {
		resizeScale()
		window.addEventListener("resize", resizeScale)

		return () => window.removeEventListener("resize", resizeScale);
	}, [])

	return (
		<div className="word-cloud">
			{Object.keys(data["word-cloud"]).map((text) => (
				<Word key={text} word={data["word-cloud"][text]} text={text} scale={scale} />
			))}
		</div>
	);
}

export default WordCloud