import React from "react";
import styled from "styled-components";

function ContactRightItem({ icon, title, contact1, contact2 }) {
  return (
    <ContactItemContainer>
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemContainer>
  );
}

const ContactItemContainer = styled.div`
  display: flex;
  background-color: var(--background-dark-color-grey);
  padding: 1.5rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem;
    border: 1px solid var(--border-color);
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      font-weight: 300;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export default ContactRightItem;
