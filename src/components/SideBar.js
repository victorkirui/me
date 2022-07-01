import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const SideBar = ({ navToggle, setNavToggle }) => {
  return (
    <SideBarContainer className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation setNavToggle={setNavToggle} navToggle={navToggle} />
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  width: 16rem;
  height: 100vh;
  position: fixed;
  background: var(--sidebar-dark-color);
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
  transition: all 0.6s ease;

  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
  }
`;

export default SideBar;
