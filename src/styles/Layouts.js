import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem 5rem 0;
  @media screen and (max-width: 1000px) {
    padding: 4.5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 4.5rem 1rem 0.5rem;
  }

  @media screen and (max-width: 425px) {
    padding: 4rem 1rem 0.5rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 3.3rem 0;

  @media screen and (max-width: 768px) {
    padding: 2.5rem 0;
  }
  @media screen and (max-width: 425px) {
    padding: 2.2rem 0;
  }
`;
