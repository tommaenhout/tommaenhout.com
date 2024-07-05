import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "./styles.css";
 

const PortFolioSection = () => {
  
    const onClickHandler = (e : React.MouseEvent<HTMLElement> ) =>{
        console.log(e.target)
    };

 
    return (
      <div className="content">
        {/* title */}
        <div className="title py-3">Portfolio</div>
        {/* content */}
        <div className='mt-7 max-h-[80%] relative'>
        <AwesomeSlider
        className='aws-btn'
        animation="cubeAnimation"
        mobileTouch={true}
        bullets={false}
        >
        <div onClick={onClickHandler} data-src="https://www.w3schools.com/w3images/nature.jpg" />
        <div data-src="https://www.w3schools.com/w3images/snow.jpg" />
        <div data-src="https://www.w3schools.com/w3images/mountains.jpg" />
        </AwesomeSlider>
        </div>
        <div className='border-b-4 h-10'></div>
      </div>
    );
  };
  export default PortFolioSection;