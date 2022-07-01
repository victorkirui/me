import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";

import skills from "../data/skills";

function Skills() {
  return (
    <SkillsContainer>
      <Title title="skills" span="skills" />
      <InnerLayout>
        <p style={{ marginBottom: "1rem" }}>
          I am able to work with the following technologies.
        </p>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="imageWrapper">
              <img src={skill.logo} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </InnerLayout>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  .skills {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .imageWrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--border-color);
    width: max-content;
    padding: 0.3rem 1rem;
    border-radius: 50px;
    img {
      width: 25px;
    }
    span {
      font-size: 0.8rem;
    }
  }
`;

export default Skills;
