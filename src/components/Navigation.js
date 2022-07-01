import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import avatar from "../images/Geek.png";

const Navigation = ({ navToggle, setNavToggle }) => {
  const [active, setActive] = useState("/");

  const handleToggle = (route) => {
    setNavToggle(!navToggle);
    setActive(route);
  };

  return (
    <NavContainer>
      <div className="avatar">
        <NavLink to="/" onClick={() => handleToggle("/")}>
          <img src={avatar} alt="avatar" />
        </NavLink>
      </div>
      <ul className="nav-items">
        <li className="nav-item" onClick={() => handleToggle("/")}>
          <NavLink to="/" className={active === "/" && "active-class"}>
            Home
          </NavLink>
        </li>
        <li className="nav-item" onClick={() => handleToggle("about")}>
          <NavLink to="/about" className={active === "about" && "active-class"}>
            About
          </NavLink>
        </li>
        <li className="nav-item" onClick={() => handleToggle("resume")}>
          <NavLink
            to="/resume"
            className={active === "resume" && "active-class"}
          >
            Resume
          </NavLink>
        </li>
        <li className="nav-item" onClick={() => handleToggle("portfolio")}>
          <NavLink
            to="/portfolio"
            className={active === "portfolio" && "active-class"}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item" onClick={() => handleToggle("contact")}>
          <NavLink
            to="/contact"
            className={active === "contact" && "active-class"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@{new Date().getFullYear()} Victor Kirui,All rights reserved.</p>
      </footer>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50%;
      border-radius: 50%;
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background: var(--primary-color);
      color: var(--btn-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.4rem 0;
        position: relative;
        text-transform: uppercase;
        font-size: 1.15rem;
        font-weight: 200;
        letter-spacing: 1px;

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background: var(--primary-color);
          transition: all 0.4s ease-in-out;
          z-index: 3;
          transform-origin: bottom;
          opacity: 0.24;
          transform-origin: top;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1rem 5px;
      font-size: 0.8rem;
      font-weight: 200;
      text-align: center;
    }
  }
`;

export default Navigation;
