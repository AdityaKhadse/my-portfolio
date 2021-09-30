import React from 'react'

const WorkCard = ({title, subtitle, desc}) => {
    return (
        <section className="work">
            <ul>
            <li className="title">{title}</li>
            <div className="subtitle">{subtitle}</div>
            <div className="desc">{desc}</div>
            </ul>
        </section>
    )
}

const Work = () => {
    const workData = [
      {
        title: "TejGyan Foundation",
        subtitle: "Android Developer",
        desc: "An app to play aartis and to get the lyrics of all of them with firebase as backend.",
      },
      {
        title: "A1 Robotic & Automation",
        subtitle: "Web Developer",
        desc: "A platform for private tutors to conduct and manage their tutions with firebase as backend.",
      },
      {
        title: "Samagra Foundation",
        subtitle: "Graphic Design",
        desc: "A platform for private tutors to conduct and manage their tutions with firebase as backend.",
      },
    ];
    return (
      <section id="work">
        <h2><u>Work Experience</u></h2>
        <div className="workContainer">
          {workData.map((work) => (
            <WorkCard key={work.title} {...work} />
          ))}
        </div>
      </section>
    );
  };

export default Work
