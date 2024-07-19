"use client";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import robinson from '../../../public/images/robinson.png';
import hype from '../../../public/images/hype.png';
import "./styles.css";
import { useState } from 'react';
import { motion } from 'framer-motion';

const data = [
  {
	src: "https://robinsonsinstitute.com/",
	title: "Robinsons institute",
	image: robinson,
	description: "For the Robinsons Institute website project, I developed both the backend and the front end, creating a seamless and user-friendly platform that provides potential clients with detailed information about the school's offerings. The website includes a contact form and a specialized feature that connects to a database to match students with similar learning interests. When a match is found, the owner of the school is notified, enhancing the school's ability to personalize and tailor its services. Additionally, I developed a mobile app in React Native for the administrator, featuring Firebase authentication. This app allows the administrator to change the prices on the website and view a list of users in the database.",
	technologies: "The technologies used in this project include React for building the dynamic and responsive front end, MongoDB for managing the database, and Node.js for the backend server.  The mobile app, built with React Native, allows for cross-platform functionality, and Firebase authentication ensures secure access for the administrator."
  },
  {
	src: "https://hype-ba.com/",
	title: "Hype",
	image: hype
  },
];

const PortFolioSection = () => {
  const [text, setText] = useState<string>(data[0].title);
  const [index, setIndex] = useState<number>(0);

  const onClickHandler = (link: string) => {
	window.open(link, '_blank');
  };

  return (
	<div className="content">
	  {/* title */}
	  <div className="title py-3">Portfolio</div>
	  {/* content */}
	  <div className='mt-7 max-h-[80%] relative'>
		<AwesomeSlider
		  onTransitionEnd={(props) => {
			setText(data[props.currentIndex].title);
		  }}
		  onTransitionStart={(props) => setText("")}
		  className='aws-btn'
		  animation="cubeAnimation"
		  mobileTouch={true}
		  bullets={false}
		>
		  {data.map((item, _index) => (
			<div key={_index} data-src={item.image.src} onClick={() =>
			  onClickHandler(item.src)
			}>
			</div>
		  ))}
		</AwesomeSlider>
		
	  </div>
	
	</div>
  );
};
export default PortFolioSection;

