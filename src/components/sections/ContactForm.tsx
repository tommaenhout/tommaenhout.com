
import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import DialogMessageSent from '../popup/implemented/DialogMessageSent';
import { ClipLoader } from 'react-spinners';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY


const ContactForm =  () => {
  const ref = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (isLoading) return;
    e.preventDefault();
    const form = ref.current;
    if (!form) return;
    const values = new FormData(form);
    const data = {
      name: values.get("name"),
      email: values.get("email"),
      message: values.get("message"),
    };

    if (serviceId === undefined || templateId === undefined || publicKey === undefined) {
      console.error(serviceId, templateId, publicKey);
      return;
    }
    setLoading(true);
    emailjs.sendForm(serviceId, templateId, form, publicKey)
      .then(() => {
        setOpen(true);
      }, (error) => {
        console.log(error.text);
      }).finally(() => {
        form.reset();
        setLoading(false);
      });
  }
  


  return (
    <>
    <DialogMessageSent open={open} setOpen={setOpen} />
    <div className="content contacts">
      {/* title */}
      <div className="title">Contact Form</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="contact_form">
            <form onSubmit={onsubmitHandler} ref={ref} id="cform" method="post">
              <div className="row">
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input 
                      required 
                      type="text" 
                      name="name" 
                      placeholder="Full Name" />
                  </div>
                </div>
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input
                      required
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col col-d-12 col-t-12 col-m-12">
                  <div className="group-val">
                    <textarea
                      required
                      name="message"
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="align-left">
                <button  type='submit' className="button">
                  <span>{isLoading ? "Sending..." : 
                  "Send Message"}</span>
                  <span className="arrow" />
                </button>
              </div>
            </form>
            <div className="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
    </>
  );
};
export default ContactForm;
