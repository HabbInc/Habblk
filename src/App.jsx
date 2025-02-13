import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div >
      <ToastContainer />
      <Navbar />
      <Header /> 
      
    
      <div >
        <Section id="features" title="Features">
          <Features /> 
        </Section>
        <Section id="About" title="about">
          <About />
        </Section>
        <Section id="services" title="Services" >
          <Services/>
        </Section>
        <Section id="testimonials" title="Testimonials" >
          <Testimonials/>
          </Section>
       
        <Section id="team" title="Team" >
          <Team/>
        </Section>
        <Section id="contact" title="Contact" >
          <Contact/>
        </Section>
      </div>
      <Footer/>
    </div>
  );
};


const Section = ({ id, children }) => {
  return (
    <section
      id={id}
      className="flex items-center justify-center bg-gray-150 my-10" 
    >
      <div className="w-full px-4"> 
        {children} 
      </div>
    </section>
  );
};

export default App;