import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import robinson from '../../../public/images/robinson.png';
import hype from '../../../public/images/hype.png';
import "./styles.css";
 

const PortFolioSection = () => {
  
    const onClickHandler = ( link : string ) =>{
       window.open(link, '_blank');
    };

 
    return (
      <div className="content">
        {/* title */}
        <div className="title py-3">Portfolio</div>
        {/* content */}
        <div className='mt-7 max-h-[80%] relative'>
          <div className='absolute z-10 h-full w-full flex justify-center items-center text-black'>Robinsons institute</div>
          <AwesomeSlider
          onTransitionEnd={(props) => console.log(props.currentIndex)}
          className='aws-btn'
          animation="cubeAnimation"
          mobileTouch={true}
          bullets={false}
          >
          <div onClick={() => onClickHandler ("https://robinsonsinstitute.com/")} data-src= {robinson.src}/>
          <div onClick={() => onClickHandler ("https://hype-ba.com/")} data-src= {hype.src} />
          </AwesomeSlider>
      </div>
      </div>
    );
  };
  export default PortFolioSection;