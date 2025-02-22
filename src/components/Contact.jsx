import React, { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";

function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleInput = (event, name) => {
        switch(name) {
            case "name": 
                setName(event.target.value)
                break
            case "email":
                setEmail(event.target.value)
                break
            case "message":
                setMessage(event.target.value) 
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_buqycuf",
            "template_axqfyt7",
            e.target,
            "huSEEz8gikeLQdJlS"
        )
        .then(
            (result) => {
                console.log("sent successfully")
                alert("Message sent successfully!")
            },
            (error) => {
                console.log(error.text);
                alert("Please try again");
            }
        );
    }

  return (
		<div id="contact-me">
			<h1>contact me</h1>
			<p className='email-text'>email: ntytomg@gmail.com</p>
			<form onSubmit={handleSubmit}>
				<label>
					Name
					<input
						name="from_name"
						type="text"
						onChange={(ev) => handleInput(ev, "name")}
						value={name}
					/>
				</label>

				<label>
					Email Address *
					<input
						id="email"
						name="from_email"
						required
						type="text"
						onChange={(ev) => handleInput(ev, "email")}
						value={email}
					/>
				</label>

				<label>
					Message *
					<input
						id="message"
						name="html_message"
						type="text"
						required
						onChange={(ev) => handleInput(ev, "message")}
						value={message}
					/>
				</label>
				<div className="bottom-wrapper">
					<div className="socials-wrapper">
						<a
							className="social-icon"
							href="https://github.com/nicoletanyt"
							target="_blank"
						>
							<IoLogoGithub />
						</a>
						<a
							className="social-icon"
							href="https://leetcode.com/u/nicoletanyt/"
							target="_blank"
						>
							<SiLeetcode />
						</a>
						<a
							className="social-icon"
							href="https://www.linkedin.com/in/nicole-tan-a1a360266/"
							target="_blank"
						>
							<IoLogoLinkedin />
						</a>
					</div>
					<input type="submit" value="Submit" id="submit-btn" />
				</div>
			</form>
		</div>
	);
}

export default Contact