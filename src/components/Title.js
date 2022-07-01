import React from "react";
import styled from "styled-components";

const Title = ({ title, span }) => {
  return (
    <TitleStyle>
      <h2>
        {title} <span>{span}</span>
      </h2>
    </TitleStyle>
  );
};

const TitleStyle = styled.div`
  h2 {
    font-weight: 600;
    font-size: 2rem;
    color: var(--white-color);
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.4rem;
    font-weight: 300;
    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 10rem;
      height: 0.3rem;
      background: var(--background-light-color-2);
      border-radius: 15px;
      @media screen and (max-width: 425px) {
        bottom: 4px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 5rem;
      height: 0.3rem;
      background: var(--primary-color);
      border-radius: 15px;
      @media screen and (max-width: 425px) {
        bottom: 4px;
      }
    }
    span {
      font-weight: 900;
      color: rgba(25, 29, 43, 0.44);
      font-size: 3.3rem;
      position: absolute;
      font-weight: 300;
      left: 0;
      top: 30%;
      z-index: -2;
      @media screen and (max-width: 768px) {
        font-size: 3rem;
      }
    }
  }
`;

export default Title;
