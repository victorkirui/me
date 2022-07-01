import React from "react";
import styled from "styled-components";

function PrimaryBtn({ title, href, size }) {
  return (
    <>
      {size === "small" ? (
        <PrimarySmallBtnStyled href={href} target="_blank" rel="noreferrer">
          {title}
        </PrimarySmallBtnStyled>
      ) : (
        <PrimaryBtnStyled href={href} download>
          {title}{" "}
        </PrimaryBtnStyled>
      )}
    </>
  );
}

const PrimarySmallBtnStyled = styled.a`
  font-size: 0.8rem;
  background: var(--primary-color);
  padding: 0.2rem 0.5rem;
  text-transform: uppercase;
  color: var(--btn-color);
  position: relative;
  font-weight: 200;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;

    background: var(--white-color);
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
  }
`;
const PrimaryBtnStyled = styled.a`
  background: var(--primary-color);
  padding: 0.7rem 2rem;
  color: var(--btn-color);
  cursor: pointer;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  font-size: 0.9rem;

  &::after {
    content: "";
    width: 0;
    height: 0.2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all 0.4s ease-in-out;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background: var(--white-color);
  }
`;
export default PrimaryBtn;
