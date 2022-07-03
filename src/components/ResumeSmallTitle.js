import React from "react";
import styled from "styled-components";

function ResumeSmallTitle({ icon, title }) {
  return (
    <SmallTitleContainer>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleContainer>
  );
}

const SmallTitleContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-right: 1rem;
    svg {
      font-size: 2.5rem;
    }
  }
  h3 {
    color: var(--white-color);
    font-size: 1.8rem;
  }
  @media screen and (max-width: 768px) {
    p {
      padding-right: 0.9rem;
      svg {
        font-size: 2.3rem;
      }
    }
    h3 {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 500px) {
    p {
      svg {
        font-size: 2.2rem;
      }
    }
    h3 {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 425px) {
    p {
      padding-right: 0.6rem;
      svg {
        font-size: 2rem;
      }
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export default ResumeSmallTitle;
