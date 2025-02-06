import { useEffect, useState } from 'react';
import './App.css'
import Homescreen from './components/Homescreen';
import Nav from './components/Nav';

function App() {

  return (
		<div>
			<Nav/>
			<Homescreen />
		</div>
	);
}

export default App
