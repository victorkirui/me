import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import { InnerLayout } from "../styles/Layouts";

import Geek from "../images/Geek.png";

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <Title title="Services" span="Services" />
      <InnerLayout>
        <div className="services">
          <ServiceCard
            title="Frontend Developer"
            image={Geek}
            paragraph="I like to code things from scratch and enjoy bringing ideas to life in the browser"
          />
          <ServiceCard
            title="Frontend Developer"
            image={Geek}
            paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio."
          />
          <ServiceCard
            title="Frontend Developer"
            image={Geek}
            paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio."
          />
        </div>
      </InnerLayout>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  .services {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.2rem;

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default ServicesSection;
