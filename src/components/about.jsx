import React, { Component } from "react";
import aboutImg from "../images/About.jpg";

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			higginsAge: "",
			kiyasAge: ""
		}
	}

	componentWillMount() {
		this.calculateHigginsAge();
		this.calculateKiyasAge();
	}

	calculateHigginsAge() {
		let today = new Date();
		let higginsBday = new Date("August 1, 2004");
		let higginsAge = today.getFullYear() - higginsBday.getFullYear();

		this.setState({
			higginsAge
		});
	}

	calculateKiyasAge() {
		let today = new Date();
		let kiyasBday = new Date("May 10, 2014");
		let kiyasAge = today.getFullYear() - kiyasBday.getFullYear();

		this.setState({
			kiyasAge
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-4">
					<img src={aboutImg} alt="Steph and Kiya Hiking" className="about-img" style={{maxHeight:"100%", maxWidth:"100%"}}/>
				</div>
				<div className="col-8">
					<h1>A passion for animal welfare and building websites</h1>
					<p>Stephanie has long been passionate about animal welfare, and recently developed a deep interest in building websites. As a brand new graduate of the Dev Point Labs" 11-week Frontend Web Developement bootcamp, Stephanie has blended her newly developed skills and personal pursuits to create a unique and inviting website that aims to help more dogs find their forever homes.</p>
					<p>For the last year, Stephanie has volunteered at a small local shelter, Kitty Cause Cat Rescue. Every week she spends time with the cats, tidies their enclosures, and talks with potential pet parents. She adopted a special-needs cat {this.state.higginsAge} years ago, a 5-year-old dog {this.state.kiyasAge} years ago, and encourages others to adopt as well. She plans to continue sharpening her programming skills by building websites, especially if they help a cause.</p>
					<h3>Contact Stephanie:</h3>
					<p><strong>Phone: </strong> (973) 945-3755</p>
					<p><strong>Email: </strong> <a href="mailto:steph.m.stamm@gmail.com">steph.m.stamm@gmail.com</a></p>
					<p><strong>Github: </strong> <a href="https://github.com/smstamm">https://github.com/smstamm</a></p>
				</div>
			</div>
		);
	}
}