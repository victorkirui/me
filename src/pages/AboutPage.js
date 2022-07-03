import React from "react";
import { MainLayout } from "../styles/Layouts";
import Title from "../components/Title";
import styled from "styled-components";
import AboutSection from "../components/AboutSection";
// import ServicesSection from "../components/ServicesSection";
// import ReviewsSection from "../components/ReviewsSection";
import Skills from "../components/Skills";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title="About Me" span="About Me" />
        <AboutSection />
        <Skills />
        {/* <ServicesSection /> */}
        {/* <ReviewsSection /> */}
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.div`
  width: 100%;
`;
export default AboutPage;
