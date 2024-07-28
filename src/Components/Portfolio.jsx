/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/programmer.jpeg";
const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Voice-Based Mental Health Detection Using Flutter and ML",
    description:
      "Develop a Flutter app that uses machine learning to detect mental health conditions through voice analysis. The app analyzes voice patterns to identify indicators of mental health issues, providing an accessible tool for early detection and monitoring.",
    url: "https://github.com/GirishSonune/oncoKnow",
  },
  {
    title: "Telegram Bot",
    description:
      "I've designed a customized Telegram bot utilizing Python's Telegram library and native modules. The bot serves as a platform to store and organize professional information and links, providing streamlined access to essential details through a user-friendly interface.",
    url: "https://github.com/GirishSonune/Telegram-Bot",
  },
  {
    title: "Object Detection in Image",
    description:
      "I created a Python project utilizing the OpenCV, NumPy, and Matplotlib libraries for efficient object and coin counting. Leveraging computer vision techniques, the project achieves accurate object detection and coin recognition.",
    url: "https://github.com/GirishSonune/Object-Detection-in-Image",
  },
  {
    title: "Movie Recommendation System",
    description:
      "I harnessed the robust capabilities of Python's NumPy and Pandas libraries to analyze a .csv dataset provided by Netflix. Employing advanced data processing techniques, I identified and highlighted key trends within the dataset.",
    url: "https://github.com/GirishSonune/Movie-Recommender",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
