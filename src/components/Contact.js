import BackgroundSpline from "./BackgroundSpline";
import Footer from "./Footer";
import {useState} from "react";
import emailjs from '@emailjs/browser';
import ModalContact from "./ModalContact";

function Contact(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onSubmitForm (e) {
    
        e.preventDefault();
        console.log(e.target);
        handleShow()
            emailjs.sendForm(process.env.REACT_APP_SERVICE_SMPT, process.env.REACT_APP_TEMPLATE_SMPT, e.target, process.env.REACT_APP_PUBLIC_KEY_SMPT)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);  
            }, (error) => {
                console.log('FAILED...', error);
            });
            e.target.reset();
      
    }
  return (    
    <section  id="Contact">
         <ModalContact 
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          title={"Message sent"}
          body={"Thank you for your message, you'll be contacted soon"}
          />
      <div className="space"></div>
      <div className="">
      <BackgroundSpline

        content={
          <div className="">
            <form 
            className="bg-transparent"
            id="formValidationDefault"
            onSubmit={onSubmitForm}>
    
                <div className="m-4">
                  <h2 className="text-white offset-md-5 mt-5 textfont1" > Contact</h2>
                  <h4 className="text-white offset-md-5 mt-2 textfont1">
                    {" "}
                    Interested in hiring me?
                  </h4>
                </div>
                <div className="m-3">
                <div className="offset-md-5 col-md-6 offset-xs-1">
                  <input
                    className="noborder text-white textfont1  mt-5 bg-black rounded form-control form-control bg-transparent"
                    type="text"
                    placeholder="Name"
                    id="validationDefaultName"
                    required="Please provide your name"
                    name="name"
                  
                  ></input>
                </div>
               
                <div className="offset-md-5 col-md-6 ">
                  <input
                    className="noborder text-white textfont1  mt-3 bg-black rounded form-control form-control bg-transparent"
                    type="email"
                    placeholder="Email"
                    id="validationDefaultEmail"
                    required="Please provide a valid email"
                    name="email"
                  
                  ></input>
                </div>
                <div className="offset-md-5 col-md-6 bg-transparent">
                  <input
                    className="noborder text-white textfont1  mt-3  rounded form-control form-control bg-transparent"
                    type="text"
                    placeholder="Subject"
                    id="validationDefaultSubject"
                    required="Please provide a subject"
                    name="subject"
                  
                  ></input>
                </div>
                <div className="offset-md-5 textfont1 col-md-6 bg-transparent">
                  <textarea
                    className="noborder text-white  mt-3 bg-black  rounded form-control form-control bg-transparent"
                    type="text"
                    rows="5"
                    placeholder="Write your message here"
                    id="validationDefaultMessage"
                    required="Please provide a message"
                    name="message"
                   
                  ></textarea>
                </div>
              
                <button 
                className="col-12 bg-transparent col-md-6 offset-md-5 mt-3 mb-5 btn btn-outline-light border-success"
                >
                  Submit
                </button>
                </div>
            </form>
            <Footer />
          </div>
        }
        link={"https://prod.spline.design/fKY9DZTJwp82BwAx/scene.splinecode"}
        screen="halfscreen"
        splineclass="splineContact d-none d-md-block"
       handleReady = {props.handleReady}
       ready = {props.ready}
      />
      <div>
        <div>
     
         
        </div>
      </div>
      </div>
    
    
    </section>
  );
}

export default Contact;
