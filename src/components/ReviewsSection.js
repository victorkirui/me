import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

function ReviewsSection() {
  return (
    <ReviewsSectionStyle>
      <Title title="Reviews" span="Reviews" />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio." />
          <ReviewItem text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio." />
        </div>
      </InnerLayout>
    </ReviewsSectionStyle>
  );
}

const ReviewsSectionStyle = styled.section`
  .reviews {
    display: flex;
    justify-content: space-between;
  }
`;

export default ReviewsSection;
