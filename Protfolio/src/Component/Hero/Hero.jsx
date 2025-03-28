import './Hero.css';
import profile_img from '../../assets/Profile.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          {/* Profile Image */}
          <div className="col-12">
            <img src={profile_img} alt="Profile" className="img-fluid profile-img mb-4" />
          </div>

          {/* Hero Content */}
          <div className="form_part col-lg-8">
            <h1>
              <span>Hello, I am Krishno Chandra Gope.</span> <br />I work as a Web Developer.
            </h1>
            <p className="lead">
              I also have working experience with <strong>Node.js</strong> and <strong>Express.js</strong> frameworks.
            </p>

            {/* Buttons */}
            <div className="hero-action d-flex justify-content-center gap-3 mt-4">
              <AnchorLink className="btn btn-gradient btn-lg px-4 py-2" offset={50} href="#contact">
                Connect With Me
              </AnchorLink>
              <button className="myResume btn-lg px-4 py-2">Review My Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;