import React from "react";
import styled from "styled-components";
import { BsBoxArrowUpRight } from "react-icons/bs";

function ResumeItem({ year, image, title, subTitle, link, technologies }) {
  console.log(technologies);

  return (
    <ResumeItemContainer>
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

        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            Show credential <BsBoxArrowUpRight className="icon" />
          </a>
        )}
      </div>
    </ResumeItemContainer>
  );
}

const ResumeItemContainer = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 2rem;
  }
  .left-content {
    width: 25%;
    padding-left: 20px;
    position: relative;
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
    }
    img {
      width: 180px;
      border: 1.5px solid var(--border-color);
      @media screen and (max-width: 768px) {
        width: 120px;
      }
    }
  }
  .right-content {
    padding-left: 2.5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      width: 2.5rem;
      height: 2px;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 1.3rem;
      margin-left: 10px;
      @media screen and (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
    h6 {
      font-size: 1rem;
      padding-bottom: 0.3rem;
      margin-left: 10px;
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
