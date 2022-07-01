import React from "react";
import styled from "styled-components";

function ReviewItem({ text }) {
  return (
    <ReviewItemContainer>
      <p>{text}</p>
    </ReviewItemContainer>
  );
}

const ReviewItemContainer = styled.div`
  width: 48%;
  padding: 2rem 1rem;
  border-left: 6px solid var(--border-color);
  background: var(--background-dark-color-grey);
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    border-width: 0.8rem;
    bottom: 0;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-color-grey) transparent transparent
      var(--background-dark-color-grey);
  }
  p {
    font-size: 0.9rem;
  }
`;

export default ReviewItem;
