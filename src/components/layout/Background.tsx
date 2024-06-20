interface BackgroundProps {
  bg?: string;
  img: string;
}

const Background = ({ bg, img } : BackgroundProps) => {
  switch (bg) {
    case "blured":
      return <BackgroundBlured />;
    case "gradient":
      return <BackgroundGradient />;
    case "img":
      return <BackgroundImg img={img} />;
    case "regular":
      return <RegularBackground />;
    default:
      return <BackgroundBlured />;
  }
};
export default Background;

const BackgroundBlured = () => {
  return (
    <div className="blured-background">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    </div>
  );
};

const BackgroundGradient = () => {
  return (
    <div className="background gradient">
      <ul className="bg-bubbles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
};

interface BackgroundImgProps {
  img: string;
}

const BackgroundImg = ({ img  }:BackgroundImgProps) => {
  return (
    <div className="background" style={{ backgroundImage: `url(${img})` }} />
  );
};

const RegularBackground = () => {
  return <div className="background"></div>;
};
