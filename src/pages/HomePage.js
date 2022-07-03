import React from "react";
import styled from "styled-components";
import ParticleBackground from "../components/ParticleBackground";
import frontendMentorLogo from "../images/frontend-mentor.svg";

import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const HomePage = () => {
  return (
    <HomePageContainer>
      <div className="p-particles-js">
        <ParticleBackground />
      </div>
      <div className="typography">
        <h1>
          HI, I am <span>Victor Kiprop</span>
        </h1>
        <p>
          A skilled Frontend professional with a passion for Frontend
          development and a great eye for design. Determined to make quality
          interfaces and web apps to make the consumers experience enjoyable.
          <br /> Mainly skilled in JavaScript, React and Git.
        </p>
        <div className="icons">
          <a
            href="https://github.com/victorkirui"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <AiOutlineGithub className="i-github" />
          </a>
          <a
            href="https://www.frontendmentor.io/profile/victorkirui"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <img
              src={frontendMentorLogo}
              alt="frontendmentor logo"
              className="i-frontend-mentor"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kirui-victor/"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <AiOutlineLinkedin className="i-linkedin" />
          </a>
        </div>
      </div>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    h1 {
      @media screen and (max-width: 768px) {
        line-height: 1.9rem;
      }
    }
    p {
      font-weight: 200;
      font-size: 1.1rem;
      margin: 1.2rem 0;
      line-height: 2rem;
    }
    @media screen and (max-width: 768px) {
      line-height: 1rem;
    }
    span {
      color: var(--primary-color);
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    .icon {
      border: 2px solid var(--border-color);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 55px;
      height: 55px;
      transition: all 0.3s ease;

      &:hover {
        border: 2px solid var(--primary-color);
      }

      .i-github,
      .i-linkedin {
        font-size: 2rem;
      }
    }
  }
`;

export default HomePage;
