import React from 'react'
import WordCloud from './WordCloud';
import { FaAngleDoubleDown } from "react-icons/fa";

function Homescreen({ref}) {
  return (
		<div className="homescreen">
			<WordCloud />
			<h1 className="name">
				hi, i'm <span className="italic">nicole tan</span>
			</h1>
			<p>16 year-old student with a passion for coding, music and reading.</p>
			<FaAngleDoubleDown className="down-icon animate__bounce animate__animated animate__infinite" />
		</div>
	);
}

export default Homescreen