"use client";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import robinson from '../../../public/images/robinson.png';
import hype from '../../../public/images/hype.png';
import "./styles.css";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StackIcon from 'tech-stack-icons';
import useScreenSizes from '@/hooks/useScreensizes';



const portfolioData = [
  {
	src: "https://robinsonsinstitute.com/",
	title: "Robinsons institute",
	image: robinson,
	description: "For the Robinsons Institute website project, I developed both the backend and the front end, creating a seamless platform that provides potential clients with detailed information about the school's offerings. The site includes a contact form and a feature to match students with similar learning interests, notifying the school owner when a match is found. Additionally, I created a mobile app in React Native for the administrator, featuring Firebase authentication. This app allows the admin to update website prices and view a list of users in the database.",
	technologies: "Technologies used include React for the front end, MongoDB for the database, and Node.js for the backend. React Native was used for the mobile app, providing cross-platform functionality, while Firebase authentication ensures secure access. This combination ensures a smooth, efficient, and scalable application.",
	stack: [
		"nodejs",
		"mongodb",
		"reactjs",
		"firebase",
		"bootstrap5"
		]
  },
  {
	src: "https://hype-ba.com/",
	title: "Hype",
	image: hype,
	description : "For the Hype Buenos Aires website project, I designed and developed a dynamic platform reflecting the club night's vibrant energy. The site offers event details, integrates with Eventbrite for guestlist management, and enables easy QR code access and VIP table bookings. Social media links keep users updated, enhancing engagement and showcasing Hype's diverse music lineup.",
	technologies: "Technologies used include CSS, Javascript, and HTML",
	stack: [
		"html5",
		"css3",
		"sass",
		"js" 
		]
  }
];

const PortFolioSection = () => {
  const [text, setText] = useState<string>(portfolioData[0].title);
  const [description, setDescription] = useState<string>(portfolioData[0].description);
  const [technologieUsed, setTechnologieUsed] = useState<string>(portfolioData[0].technologies);
  const [stack, setStack] = useState<string[]>(portfolioData[0].stack);
  const {isMobile} = useScreenSizes();

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
			setText(portfolioData[props.currentIndex].title);
			setDescription(portfolioData[props.currentIndex].description);	
			setTechnologieUsed(portfolioData[props.currentIndex].technologies);
			setStack(portfolioData[props.currentIndex].stack);
		  }}
		  onTransitionStart={(props) => {
			setText(!isMobile ? "" : portfolioData[props.currentIndex].title);
			setDescription(!isMobile ? "" : portfolioData[props.currentIndex].description);
			setTechnologieUsed(!isMobile ? "" : portfolioData[props.currentIndex].technologies);
			setStack(!isMobile ? [] : portfolioData[props.currentIndex].stack);
		 }}
		  className='aws-btn'
		  animation="cubeAnimation"
		  mobileTouch={true}
		  bullets={false}
		>
		  {portfolioData.map((item, _index) => (
			<div key={_index} data-src={item.image.src} onClick={() =>
			  onClickHandler(item.src)
			}>
			</div>
		  ))}
		</AwesomeSlider>
		<AnimatePresence>
			{(text || isMobile)  &&
			<motion.div 
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="mt-5 w-full flex gap-x-2 justify-center">
				<AnimatePresence>
				{stack.map((item, index) => (
					<motion.div 
						transition={{ 
							duration: 0.5,
							staggerChildren: 0.2, 
							staggerDirection: 1,
							delay: !isMobile ?  index * 0.1 : 0
						}}
						key={index} 
						initial={{ 
							opacity:!isMobile ? 0 : 1,
							y: !isMobile ? 20 : 0
						}} 
						animate={{ 
							opacity: 1,
							y: 0
						}}
						exit={{ opacity: 0 }}
						>
						<StackIcon className='h-10 w-10' name={item} />
					</motion.div>
				))}
				</AnimatePresence>
			</motion.div>
			}
		</AnimatePresence>
		<AnimatePresence>
			{text && 
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}>
				<div style={{marginTop : "20px"}} className="title">{text}</div>
				<p className='mt-3'>{description}</p>
				<p className='mt-3'>{technologieUsed}</p>
			</motion.div>}
		</AnimatePresence>
	  </div>
	
	</div>
  );
};
export default PortFolioSection;

