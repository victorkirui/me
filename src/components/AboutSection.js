import React from "react";
import styled from "styled-components";
import PrimaryBtn from "./PrimaryBtn";
import Resume from "../images/Resume Victor Kiprop Kirui.pdf";
import { InnerLayout } from "../styles/Layouts";

const AboutSection = () => {
  return (
    <AboutContainer>
      <InnerLayout>
        <div className="section-styles">
          <div className="left-section">
            <div className="info-title">
              <p>Full Name </p>
              <p>Nationality </p>
              <p>Location </p>
            </div>
            <div className="info">
              <p>: Victor Kiprop Kirui</p>
              <p>: Kenyan</p>
              <p>: Nairobi, Kenya</p>
            </div>
          </div>

          <div className="right-section">
            <p>
              I am a self taught front-end developer currently pursuing the
              opportunity to advancing my career as a Frontend developer. I have
              a Bachelor's degree in Computer Science from Kabarak University.
            </p>
            <p>
              My goal is to bridge the gap between design and engineering to
              create a beautiful product that is scalable and efficient.
            </p>
          </div>
        </div>

        <PrimaryBtn title="Download CV" href={Resume} />
      </InnerLayout>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  .section-styles {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    grid-gap: 2rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .left-section {
      display: flex;
      gap: 1.5rem;

      .info-title,
      .info {
        p {
          padding: 0 0 1.6rem;
          text-transform: uppercase;
        }
      }

      .info {
        p {
          font-weight: 200;
        }
      }
    }

    .right-section {
      p {
        text-align: justify;
        font-weight: 200;
        font-size: 1rem;
        line-height: 1.4rem;
        margin-bottom: 1.2rem;
      }
      @media screen and (max-width: 768px) {
        line-height: 1rem;
      }
    }
  }
`;

export default AboutSection;
