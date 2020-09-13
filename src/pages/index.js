import React, { useContext } from "react";
import styles from "./index.module.css";
import Footer from "../sections/Footer";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Certifications from "../sections/Certifications";
import Publications from "../sections/Publications";
import Education from "../sections/Education";
import Hero from "../sections/Hero";
import Languages from "../sections/Languages";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Skills from "../sections/Skills";
import Art from "../sections/Art";
import Design from "../sections/Design";
import Work from "../sections/Work";
import styled from 'styled-components';
import Particles from 'react-particles-js';
import ThemeContext from "../context/ThemeContext";

const IndexPage = () => {
  const { dark } = useContext(ThemeContext);
  const params = {
    particles: {
      number: {
        value: 5,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      color: {
        value: '#575757', // 303346
      },
      shape: {
        type: 'star',
        stroke: {
          width: 0,
          color: 'rgba(255,255,255,255)',
        },
        sides: {
          nb_sides: 7,
        },
      },
      opacity: {
        value: 0.01,
        random: true,
        anim: {
          enable: false,
          speed: 0.15984015984015984,
          opacity_min: 0.1,
          sync: true,
        },
      },
      size: {
        value: 34.29459670609772,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 40,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: '#ffffff',
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: false,
          mode: 'remove',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <Wrapper>
      <div className={`container ${styles.layout}`}>
      {dark ? <Background params={params}/> : <BackgroundLight params={params}/>}
        <Hero />
        <AboutMe />
        <div className={styles.workEducation}>
          <Work />
          <Education />
        </div>
        <div>
          <Publications />
        </div>
        <Projects />
        <div className={styles.achievementsCertificationPhilanthropy}>
          <div>
            <Skills />
          </div>
          <div>
            <Certifications />
          </div>
        </div>
        <Languages />
        <Design/>
        <Art/>
        <Resume />
        <Footer />
      </div>
    </Wrapper>
  );
};

const Background = styled(Particles)`
position: absolute;
top: 0;
left: 0;
background: #141826;
z-index: -1;
width: 100%;
height: 100%;
`;

const BackgroundLight = styled(Particles)`
position: absolute;
top: 0;
left: 0;
background: #ffffff;
z-index: -1;
width: 100%;
height: 100%;
`;

export default IndexPage;
