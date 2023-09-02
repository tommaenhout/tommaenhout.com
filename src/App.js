import Hero from "./components/Hero";
import About from "./components/About";
import { useState } from "react";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
   
    <div>
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
