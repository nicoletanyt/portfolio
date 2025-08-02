import React from 'react'
import Card from './Card';
import data from "../data.json"
import AboutMeImg from "/src/assets/about-me.jpeg";

function AboutMe({elRef}) {
  return (
		<div id="about-me" ref={elRef}>
			<h1>about me</h1>
			<div className="about-me-wrapper">
				<div className="img-wrapper">
					<img className="profile-pic" src={AboutMeImg} />
				</div>
				<p className="description">
					Hi, I'm Nicole Tan YiTong, a 17 year-old student with a passion for
					coding, particularly web development and artificial intelligence :)
					<br />
					Aside from coding, I am an avid reader, music enthusiast, and milk tea
					lover. I am always eager to learn new things and tackle challenges.
					<br />I aspire to continue exploring different aspects of technology
					and creating apps that benefit the community!
					<br />
					<a className="contact-nav" href="#contact-me">
						Drop me a message!
					</a>
				</p>
			</div>
			<h2>~ education</h2>
			<div className="card-container">
				{data["education"].map((item, index) => (
					<Card key={index} year={item.year} event={item.school} />
				))}
			</div>
		</div>
	);
}

export default AboutMe