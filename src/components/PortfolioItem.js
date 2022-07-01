import React from "react";
import styled from "styled-components";
import PrimaryBtn from "./PrimaryBtn";

function PortfolioItem({ itemData }) {
  return (
    <PortfolioContainer className="Item">
      <div className="p-image-section">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <img src={itemData.image} alt="" className="product-image" />
      </div>
      <div className="technologies">
        {itemData.technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <div className="p-content">
        <PrimaryBtn size="small" href={itemData.link1} title="Code" />
        <PrimaryBtn size="small" href={itemData.link3} title="Live" />
      </div>
    </PortfolioContainer>
  );
}

const PortfolioContainer = styled.div`
  position: relative;
  height: 300px;
  border: 2px solid var(--border-color);
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  @media screen and (max-width: 425px) {
    height: 315px;
  }
  @media screen and (max-width: 375px) {
    height: 315px;
  }
  @media screen and (max-width: 320px) {
    height: 315px;
  }
  .p-image-section {
    cursor: pointer;
    height: 185px;
    overflow: hidden;
    @media screen and (max-width: 425px) {
      height: 200px;
    }
  }

  .p-browser {
    height: 20px;
    background: rgba(243, 242, 242);
    display: flex;
    align-items: center;
    position: sticky;
    z-index: 10;
    .p-circle {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin: 3px;
      background-color: yellow;
      &:first-child {
        background-color: red;
      }
      &:last-child {
        background-color: lightgreen;
      }
    }
  }
  .product-image {
    width: 100%;
    transition: all 10s ease;
  }
  .p-image-section:hover .product-image {
    transform: translateY(-100%);
  }
  .technologies {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    span {
      font-size: 0.7rem;
      margin: 0 0.3rem;
    }
  }
  .p-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  }
`;

export default PortfolioItem;
