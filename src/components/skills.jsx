import React from "react";

export const Skill = (props) => {
  return <li className="skill"># {props.name}</li>;
};

const Skills = () => {
  let mySkills = ["Android", "Python", "Firebase", "DBMS"];
  return (
    <section id="skills">
      <h2><u>Skills</u></h2>
      <ul>
        {mySkills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
