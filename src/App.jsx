import { useEffect, useState } from 'react';
import './App.css'
import Homescreen from './components/Homescreen';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';

function App() {

  return (
		<>
			<Nav/>
			<div className='main'>
				<Homescreen/>
				<AboutMe/>
			</div>
		</>
	);
}

export default App
