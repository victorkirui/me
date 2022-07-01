import React from "react";
import styled from "styled-components";

function CategoryButtons({ filter, categories }) {
  return (
    <ButtonsWrapper>
      {categories.map((category, index) => (
        <button key={index} onClick={() => filter(category)}>
          {category}
        </button>
      ))}
    </ButtonsWrapper>
  );
}

const ButtonsWrapper = styled.div`
  margin: 2rem 0 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
  button {
    outline: none;
    border: none;
    background: var(--primary-color);
    padding: 0.5rem 1rem;
    color: var(--btn-color);
    cursor: pointer;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 200;
    position: relative;
    max-width: 150px;
    &:active,
    &:focus {
      background: var(--background-light-color-2);
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.2rem;
      width: 0;
      background: var(--white-color);
      opacity: 0.7;
      transition: all 0.4s ease-in-out;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

export default CategoryButtons;
