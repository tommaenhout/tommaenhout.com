import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "./styles.css";
 
const slider = (
  <AwesomeSlider
    className='aws-btn'
    animation="cubeAnimation"
    mobileTouch={true}
    bullets={false}
    media={[
      {
        source: '/images/stranger-things-5.jpg',
      },
      {
        source: '/images/stranger-things-7.png',
      },
      {
        source: '/images/lwork3.jpg',
      },
    ]}
  />
);
const PortFolioSection = () => {
    return (
      <div className="content">
        {/* title */}
        <div className="title py-3">Portfolio</div>
        {/* content */}
        <div className='bg-black mt-7 max-h-[80%] relative'>{slider}</div>
        <div className='border-b-4 h-10'></div>
      </div>
    );
  };
  export default PortFolioSection;