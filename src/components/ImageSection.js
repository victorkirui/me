import React from "react";
import styled from "styled-components";
import PrimaryBtn from "./PrimaryBtn";
import Resume from "../images/Resume Victor Kiprop Kirui.pdf";
import { InnerLayout } from "../styles/Layouts";

const ImageSection = () => {
  return (
    <ImageContainer>
      <InnerLayout className="section-styles">
        <div className="left-section">
          <p>
            I am a selft taught front-end developer currently pursuing the
            opportunity to advancing my career as a Frontend developer. I have a
            Bachelor's degree in Computer Science from Kabarak University.
          </p>
          <p>
            My goal is to always bridge the gap between design and engineering
            to create a beautiful product (with the user in mind) - that is
            scalable and efficient .
          </p>
        </div>
        <div className="right-section">
          <div className="about-info">
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
          <PrimaryBtn title="Download CV" href={Resume} />
        </div>
      </InnerLayout>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  .section-styles {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2rem;
    .left-section {
      p {
        text-align: justify;
        font-weight: 200;
        font-size: 1rem;
        margin-bottom: 1.2rem;
        line-height: 1.5rem;
      }
      @media screen and (max-width: 768px) {
        line-height: 1rem;
      }
    }
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      .left-section,
      .right-section {
        margin-bottom: 2rem;
      }
    }
    .right-section {
      .about-info {
        display: flex;
        margin-bottom: 1.5rem;
        .info-title {
          padding-right: 1.5rem;
          p {
            font-weight: 600;
          }
        }

        .info-title,
        .info {
          p {
            padding: 0.5rem 0;
          }
        }
      }
    }
  }
`;

export default ImageSection;
