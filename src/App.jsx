import { useEffect, useState } from 'react';
import './App.css'
import Homescreen from './components/Homescreen';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Involvement from './components/Involvement';

function App() {

  return (
		<>
			<Nav/>
			<div className='main'>
				<Homescreen/>
				<AboutMe/>
				<Projects/>
				<Achievements/>
				<Involvement/>
			</div>
		</>
	);
}

export default App
