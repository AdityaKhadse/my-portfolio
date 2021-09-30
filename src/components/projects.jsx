import React from "react";
import { Skill } from "./skills";
import CodeImg from "../assets/aartiApp.jpeg";

const ProjectCard = ({ img, title, subtitle, desc, stack, live, code }) => {
  return (
    <div className="projectCard">
      <div className="projectCardInner1">
        <img src={img} />
      </div>
      <div className="projectCardInner2">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="desc">{desc}</div>
        {/* <ul className="teckStack">
            {stack.map((tech) => (
            <Skill key={tech} name={tech} />
            ))}
        </ul> */}
        <div className="links">
            <a href={live} target="_blank">
            Live
            </a>
            <a href={code} target="_blank">
            Code
            </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      img: CodeImg,
      title: "Aarti Sangrah",
      subtitle: "Android App",
      desc: "An app to play aartis and to get the lyrics of all of them with firebase as backend.",
      stack: ["Android", "Firebase", "JAVA"],
      live: "https://play.google.com/store/apps/details?id=com.hashtagitco.aarti_sangrah",
      code: "https://github.com/hashtag-it-consultancy/Aarti_Sangrah",
    },
    {
      img: CodeImg,
      title: "Tutor App",
      subtitle: "Android App",
      desc: "A platform for private tutors to conduct and manage their tutions with firebase as backend.",
      stack: ["Android", "Firebase", "JAVA"],
      live: "",
      code: "",
    },
  ];
  return (
    <section id="projects">
      <h2><u>Projects</u></h2>
      <div className="projectCardsContainer">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;