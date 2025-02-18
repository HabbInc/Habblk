import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import Blogs from "./components/Blogs"; // Fixed: Using correct component
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Header />

      <div>
        <Section id="features">
          <Features />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="services">
          <Services />
        </Section>
        <Section id="blogs">
          <Blogs /> {/* Fixed: Now rendering the Blogs component */}
        </Section>
        <Section id="testimonials">
          <Testimonials />
        </Section>
        <Section id="team">
          <Team />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </div>

      <Footer />
    </div>
  );
};

// Section Wrapper Component
const Section = ({ id, children }) => {
  return (
    <section id={id} className="flex items-center justify-center bg-gray-150 my-10">
      <div className="w-full px-4">{children}</div>
    </section>
  );
};

export default App;
