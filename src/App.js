import Hero from "./components/Hero";
import About from "./components/About";
import { useState } from "react";
import Contact from "./components/Contact";

function App() {
  const [ready, setReady] = useState(false);
  const handleReady = () => setReady(true);

  return (
   
    <div>
      <Hero 
      handleReady={handleReady}
      ready={ready}
      />

      {ready ? (
        <div>
          <About />
          <Contact
           handleReady={handleReady}
           ready={ready}
          />
        </div>
      ) : (
        <div className="p-2 text-white position-absolute bottom-50 end-50">
          <div className="spinner-border text-white " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
