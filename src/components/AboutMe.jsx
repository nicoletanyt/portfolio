import React from 'react'
import Card from './Card';
import data from "../data.json"

function AboutMe() {
  return (
		<div id="about-me">
			<h1>about me</h1>
			<div>
        <div className='img-wrapper'>
				  <img className='profile-pic' src={"src/assets/about-me.jpeg"} />
        </div>
				<p className='description'>
					Hi, I'm Nicole Tan YiTong, a 16 year-old student with a passion for
					coding, particularly web development and artificial intelligence :)
					<br/>
          Aside from coding, I am an avid reader, music enthusiast, and coffee
					lover. I am always eager to learn new things and tackle challenges. 
          <br/>
          I aspire to continue exploring different aspects of technology and
					creating apps that benefit the community!
				</p>
			</div>
      <h2>~ education</h2>
      <div className='education-wrapper'>
        {
          data["education"].map((item) => (
            <Card year={item.year} event={item.school}/>
          ))
        }
      </div>
		</div>
	);
}

export default AboutMe