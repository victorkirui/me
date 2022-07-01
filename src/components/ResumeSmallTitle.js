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
`;

export default ResumeSmallTitle;
