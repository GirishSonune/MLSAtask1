/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Girish Sonune",
  title: "Data Scientist & Flutter Developer",
  email: "girish.sonune@gmail.com",
  gitHub: "https://github.com/GirishSonune",
  instagram: "https://instagram.com/girish_sonune?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
  linkedIn: "https://www.linkedin.com/in/girish-sonune-7a7090255",
  medium: "https://medium.com/@girish.sonune",
  twitter: "https://twitter.com/GirishSonune?t=5vldDBscsdJYUqxFj4srKw&s=09",
  youTube: "https://youtube.com/@Go-With-Me123",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
