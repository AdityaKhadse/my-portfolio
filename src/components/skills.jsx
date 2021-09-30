import React from "react";

export const Skill = ({title,value}) => {
  return (
  <div>
    <li className="skill">#{title} </li>
    <progress className="progress" value={value} max="100"/>
  </div>
  );
};

const Skills = () => {
  const mySkills = [
    {
      title: "Android",
      value: "80"
    },
    {
      title: "Python",
      value: "60"
    },
    {
      title: "Firebase",
      value: "50"
    },
    {
      title: "DBMS",
      value: "50"
    },
  ];
  return (
    <section id="skills">
      <h2><u>Skills</u></h2>
      <ul>
        {mySkills.map((skill) => (
          <Skill key={skill.title} {...skill} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
