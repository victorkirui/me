import React from "react";
import styled from "styled-components";
import { BsBoxArrowUpRight } from "react-icons/bs";

function ResumeItem({ year, image, title, subTitle, link, technologies,text }) {

  return (
    <ResumeItemContainer>
      <div className="mobile-wrapper">
        <div className="left-content">
          {year && <p>{year}</p>}
          {image && <img src={image} alt="certificate thumbnail" />}
        </div>
        <div className="right-content">
          <h5>{title}</h5>
          <h6>{subTitle}</h6>

          <div className="technologies">
            {technologies &&
              technologies.map((technology, index) => (
                <span key={index}>{technology}</span>
              ))}
          </div>

{text && (<span>{text}</span>)}
          
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              Show credential <BsBoxArrowUpRight className="icon" />
            </a>
          )}
        </div>
      </div>
    </ResumeItemContainer>
  );
}

const ResumeItemContainer = styled.div`
  .mobile-wrapper {
    display: flex;
    padding-bottom: 2rem;
    /* &:not(:last-child) {
      padding-bottom: 2rem;
    } */
    @media screen and (max-width: 500px) {
      display: grid;
      grid-template-columns: 1fr;
      padding-bottom: 0;
    }

    .left-content {
      width: 25%;
      padding-left: 20px;
      position: relative;
      @media screen and (max-width: 500px) {
        width: 90%;
        margin-bottom: 0.6rem;
      }
      &::before {
        content: "";
        position: absolute;
        left: -9px;
        top: 10px;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: var(--background-dark-color);
        border: 2px solid var(--border-color);
      }
      p {
        display: inline-block;
        color: var(--white-color);
        font-size: 0.9rem;
        @media screen and (max-width: 600px) {
          font-size: 0.8rem;
        }
      }
      img {
        width: 180px;
        border: 1.5px solid var(--border-color);
        @media screen and (max-width: 768px) {
          width: 120px;
        }
        @media screen and (max-width: 650px) {
          width: 100px;
        }
        @media screen and (max-width: 600px) {
          width: 75px;
        }
      }
    }
    .right-content {
      padding-left: 2.5rem;
      position: relative;

      @media screen and (max-width: 600px) {
        padding-left: 2rem;
      }
      @media screen and (max-width: 500px) {
        margin-bottom: 2rem;
        padding-left: 1rem;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        width: 2.5rem;
        height: 2px;
        background-color: var(--border-color);

        @media screen and (max-width: 600px) {
          width: 2rem;
        }
        @media screen and (max-width: 500px) {
          width: 1rem;
        }
      }
      h5 {
        color: var(--primary-color);
        font-size: 1.3rem;
        margin-left: 10px;
        @media screen and (max-width: 768px) {
          font-size: 1.2rem;
        }
        @media screen and (max-width: 500px) {
          font-size: 0.9rem;
          margin-left: 5px;
        }
      }
      h6 {
        font-size: 1rem;
        padding-bottom: 0.3rem;
        margin-left: 10px;
        @media screen and (max-width: 500px) {
          font-size: 0.9rem;
          margin-left: 6px;
        }
      }

      .technologies {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;

        span {
          border: 1px solid var(--border-color);
          width: max-content;
          padding: 0.2rem 0.8rem;
          border-radius: 50px;
          font-size: 0.6rem;
        }
      }
    }

    a {
      border: 1px solid var(--border-color);
      padding: 0.3rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      cursor: pointer;
      display: inline-block;
      transition: all 0.4s ease;
      .icon {
        font-size: 0.8rem;
        margin-left: 0.5rem;
      }
      &:hover {
        background: var(--border-color);
        transform: scale(1.03);
      }
    }
  }
`;

export default ResumeItem;
