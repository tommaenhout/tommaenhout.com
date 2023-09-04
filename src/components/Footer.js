import Socials from "./Socials";

function Footer() {
  return (
  
    <footer>
      <div className="bg-black-hero container-fluid row p-0 m-0">
        <hr className="hrstyling"/>
        <div className="row  m-0">
          <div className="col-12 col-md-4 mt-4 ">
            <h4 className="text-white offset-3">Tom Maenhout</h4>
            <nav>
              <a href="#About" className="nav-link active text-white opacity-50 offset-3">
                About me
              </a>
              <a
                href="#Contact"
                className="nav-link active mt-1 text-white offset-3 opacity-50"
              >
                 Contact
              </a>
            </nav>
          </div>
          <div className="col-12 col-md-4 mt-4 ">
            <h4 className="text-white offset-3 ">Contact</h4>
            <p className="text-white offset-3 opacity-50">tom.maenhout@gmail.com</p>
          </div>
          <div className="col-12 col-md-4 mt-4">
            <h4 className="text-white offset-3">Follow me</h4>
            <Socials
            offset= "offset-3 opacity-50"
            opacity= "opacity-50"
            />
          </div>
        </div>
        <br />
        <div className="row m-0 justify-content-center">
          <div className="col-12 col-md-4 align-self-end text-center">
            <br />
            <br />
            <br />
            <p className="text-white opacity-50">©2022 tommaenhout.com</p>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
