import React from "react";
import styled from "styled-components";

function ServiceCard({ image, title, paragraph }) {
  return (
    <ServiceCardContainer>
      <div className="container">
        <img src={image} alt="" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardContainer>
  );
}

const ServiceCardContainer = styled.section`
  background: var(--background-dark-color-grey);
  padding: 1rem;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-top: 4px solid var(--border-color);
  transition: all 0.4s ease-in-out;

  &:hover {
    border-top: 4px solid var(--primary-color);
  }

  .container {
    h4 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding: 1rem 0;
      position: relative;
      &:after {
        content: "";
        width: 2rem;
        background: var(--border-color);
        height: 4px;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
    p {
      padding: 1rem 0 0;
      font-size: 0.9rem;
    }
    img {
      width: 60px;
      aspect-ratio: 1/1;
    }
  }
`;

export default ServiceCard;
