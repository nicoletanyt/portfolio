import { useEffect, useRef, useState } from 'react';
import './App.css'
import Homescreen from './components/Homescreen';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Involvement from './components/Involvement';
import Contact from './components/Contact';
import useIsVisible from './hooks/useIsVisible';

function App() {

	const observerRefs = useRef({
		homepage: useRef(null),
		"about-me": useRef(null),
		achievements: useRef(null),
		projects: useRef(null),
		involvement: useRef(null),
		"contact-me": useRef(null),
	});

	const observers = useIsVisible({refDict: observerRefs.current})

  return (
		<div>
			<Nav observers={observers} />
			<div className="main">
				<Homescreen elRef={(el) => (observerRefs.current["homepage"] = el)} />
				<AboutMe elRef={(el) => (observerRefs.current["about-me"] = el)} />
				<Projects elRef={(el) => (observerRefs.current["projects"] = el)} />
				<Achievements
					elRef={(el) => (observerRefs.current["achievements"] = el)}
				/>
				<Involvement
					elRef={(el) => (observerRefs.current["involvement"] = el)}
				/>
				<Contact elRef={(el) => (observerRefs.current["contact-me"] = el)} />
			</div>
		</div>
	);
}

export default App
