import Title from "../components/Title";
import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import PortfolioItem from "../components/PortfolioItem";
import CategoryButtons from "../components/CategoryButtons";

// data
import portfolios from "../data/portfolios";

const allcategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];

function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState(portfolios);
  const [categories, setCategories] = useState(allcategories);

  const filter = (category) => {
    if (category === "All") {
      setPortfolioItems(portfolios);
    } else {
      const filteredData = portfolios.filter(
        (item) => item.category === category
      );
      setPortfolioItems(filteredData);
    }
  };

  return (
    <MainLayout>
      <Title title="Portfolios" span="Portfolios" />
      <InnerLayout>
        <ContentWrapper>
          <p>Here are some frontend projects I have worked on</p>
          <CategoryButtons filter={filter} categories={categories} />
          <div className="products">
            {portfolioItems.map((item) => (
              <PortfolioItem key={item.id} itemData={item} />
            ))}
          </div>
        </ContentWrapper>
      </InnerLayout>
    </MainLayout>
  );
}

const ContentWrapper = styled.div`
  .products {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    margin: auto;
    margin-top: 1.5rem;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default PortfolioPage;
