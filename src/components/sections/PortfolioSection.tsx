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
	image: robinson
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
		{text && <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} 
      className='absolute z-10 h-full w-full flex justify-center items-center text-black'>{text}</motion.div>}
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

