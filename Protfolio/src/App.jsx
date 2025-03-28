import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from "./Component/About/About";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import Services from './Component/Services/Services';
import MyWork from './Component/MyWork/MyWork';
import Contact from './Component/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <About />
      <Services />
      <MyWork />
      <Contact />
    </div>
  );
};

export default App;