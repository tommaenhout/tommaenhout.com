import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 
const slider = (
  <AwesomeSlider
    media={[
      {
        source: '/images/lwork1.jpg',
      },
      {
        source: '/images/lwork2.jpg',
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
        <div className='bg-black max-h-[80%] relative p-2'>{slider}</div>
        <div></div>
      </div>
    );
  };
  export default PortFolioSection;