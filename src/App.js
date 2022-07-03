import { useEffect, useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import { IconButton } from "@material-ui/core";

import Switch from "@material-ui/core/Switch";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons//Close";
//PAGES
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <WidthWrapper>
      <SideBar navToggle={navToggle} setNavToggle={setNavToggle} />

      <MainContentWrapper>
        <div id="menuWrapper">
          <div className="light-dark-mode">
            <div className="left-content">
              <Brightness4Icon />
            </div>
            <div className="right-content">
              <Switch
                value=""
                checked={checked}
                inputProps={{ "aria-label": "controlled" }}
                onClick={themeToggler}
              />
            </div>
          </div>
          <div
            className="hamburger-menu"
            onClick={() => setNavToggle(!navToggle)}
          >
            <IconButton>
              {navToggle ? (
                <CloseIcon className="burger" />
              ) : (
                <MenuIcon className="burger" />
              )}
            </IconButton>
          </div>
        </div>

        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainContentWrapper>
    </WidthWrapper>
  );
}
const WidthWrapper = styled.div`
  max-width: 1350px;
  margin: auto;
`;
const MainContentWrapper = styled.main`
  position: relative;
  min-height: 100vh;
  margin-left: 16rem;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  #menuWrapper {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 100;
    height: fit-content;
    width: fit-content;
    display: flex;
    align-items: center;
  }
  .light-dark-mode {
    background-color: var(--background-light-color-2);
    width: 4.5rem;
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    svg {
      font-size: 1rem;
      color: var(--white-color);
    }
  }

  .hamburger-menu {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    .hamburger-menu {
      display: block;
      z-index: 9999;
      .burger {
        display: inline-block;
        color: var(--white-color);
        z-index: 9999;
      }
      svg {
        font-size: 2.3rem;
      }
    }
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
