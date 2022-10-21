import NavbarHero from "./Navbar";
import BackgroundSpline from "./BackgroundSpline";
import "./textfadeIn.css";


function Hero(props) {
  return (
    <section id="Hero">
      <NavbarHero />
      <BackgroundSpline
        content={
          <div>
            <div className="row justify-content-end ">
              <div className="flyIn lineOne col-md-5 bottom-1 p-4">Full</div>
            </div>
            <div className="row justify-content-end">
              <div className="flyIn lineTwo col-md-5 bottom-2 p-4">Stack</div>
            </div>
            <div className="row justify-content-end">
              <div className="flyIn lineThree col-md-5 bottom-3 p-4">
                developer
              </div>
            </div>
          </div>
        }
        link={"https://prod.spline.design/XME1RwJcmat0oHI9/scene.splinecode"}
        screen= "fullscreen"
        splineclass="spline"
        handleReady= {props.handleReady}
        ready = {props.ready}
      />
    </section>
  );
}

export default Hero;
