import NavbarHero from "./Navbar";
import BackgroundSpline from "./BackgroundSpline";
import "./textfadeIn.css";


function Hero({loading, setLoading}) {


  return (
    <section id="Hero">
      <NavbarHero />
      <BackgroundSpline
        content={
          <div>
            <div className="row justify-content-end ">
              <div className="flyIn lineOne col-md-5 bottom-1 p-4 letter-spacing">Front</div>
            </div>
            <div className="row justify-content-end">
              <div className="flyIn lineTwo col-md-5 bottom-2 p-4 letter-spacing">End</div>
            </div>
            <div className="row justify-content-end">
              <div className="flyIn lineThree col-md-5 bottom-3 p-4 letter-spacing">
                Developer
              </div>
            </div>
          </div>
        }
        link={"https://prod.spline.design/XME1RwJcmat0oHI9/scene.splinecode"}
        screen= "fullscreen"
        splineclass="spline"
        loading={loading}
        setLoading={setLoading}
      />
    </section>
  );
}

export default Hero;
