import Blogs from "../components/Blogs"; // ✅ Add Blogs section
import Features from "../components/Features";
import Footer from "../components/Footer"; // ✅ Add Footer
import Header from "../components/Header";
import Services from "../components/Services"; // ✅ Add Services section
import Team from "../components/Team"; // ✅ Add Team section

function HomePage() {
  return (
    <div>
      <Header />
      <Features />
      <Services />  {/* ✅ Display services */}
      <Blogs />  {/* ✅ Display blogs section */}
      <Team />  {/* ✅ Display team section */}
      <Footer />  {/* ✅ Footer added */}
    </div>
  );
}

export default HomePage;
