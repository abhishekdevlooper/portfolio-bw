import Hero from "../sections/Hero";
import ProjectShowcase from "../sections/ProjectShowcase";
import TechStack from "../sections/TechStack";
import Testimonials from "../sections/Testimonials";
import ContactForm from "../sections/ContactForm";

const Home = () => {
  return (
    <div className="mt-16">
      <Hero />
      <ProjectShowcase />
      <TechStack />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
