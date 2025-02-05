import { useState } from 'react'
import data from "./data.json"
import './App.css'

function App() {


  return (
		<div>
			<img src={data.projects[0].image}/>
		</div>
	);
}

export default App
