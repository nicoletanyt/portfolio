import React, { useEffect, useRef, useState } from 'react'
import data from "../data.json"
import Word from './Word'

function WordCloud() {
	const [scale, setScale] = useState(0);
	const wordCloudRef = useRef(null)

	const resizeScale = () => {
		if (screen.width > 1600) setScale(1.6);
		else if (screen.width > 1400) setScale(1.4);
		else if (screen.width > 1100) setScale(1.3);
		else if (screen.width > 800) setScale(1.2);
		else if (screen.width > 500) setScale(0.9);
		else setScale(0.85);
	}

	useEffect(() => {
		resizeScale()
		window.addEventListener("resize", resizeScale)

		return () => window.removeEventListener("resize", resizeScale);
	}, [])

	return (
		<div className="word-cloud" ref={wordCloudRef}>
			{Object.keys(data["word-cloud"]).map((text) => (
				<Word key={text} word={data["word-cloud"][text]} text={text} scale={scale} />
			))}
		</div>
	);
}

export default WordCloud