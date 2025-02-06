import React from 'react'
import data from "../data.json"
import Word from './Word'

function WordCloud() {
  return (
		<div className="word-cloud">
			{Object.keys(data["word-cloud"]).map((text) => (
				<Word key={text} word={data["word-cloud"][text]} text={text} />
			))}
		</div>
	);
}

export default WordCloud