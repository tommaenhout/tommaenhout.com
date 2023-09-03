import Hero from "./components/Hero";
import About from "./components/About";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import ModalContact from "./components/ModalContact";

function App() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const isMessageShown = localStorage.getItem("isMessageShown");
 
    setTimeout(() => {
      if (!isMessageShown) {
       setShow(true);
      localStorage.setItem("isMessageShown", true);
      }
    }, 5000);
  }, []);

  return (
    <div>
      <ModalContact
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        title="Website updated soon"
        body="Enjoy the website while it's being updated, come back later to see the awesome changes."
      />
      <Hero 
      loading={loading}
      setLoading={setLoading}
      />
      {!loading && (
        <div>
          <About/>
          <Contact
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      )}
    </div>
  );
}

export default App;
