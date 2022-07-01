import netflix from "../images/portfolioImages/netflix.png";
import frontendmentor1 from "../images/portfolioImages/frontendmentor1.png";
import frontendmentor2 from "../images/portfolioImages/frontendmentor2.png";
import fibrconnect from "../images/portfolioImages/fibrconnect.png";
import tesla from "../images/portfolioImages/tesla.png";
import airbnb from "../images/portfolioImages/airbnb.png";
import reactweb from "../images/portfolioImages/reactweb.png";
import responsiveGrid from "../images/portfolioImages/responsiveGrid.png";
import bootstrap from "../images/portfolioImages/bootstrap.png";
import clinterpol from "../images/portfolioImages/clinterpol.png";
import accurate from "../images/portfolioImages/accurate.png";

const portfolios = [
  {
    id: 1,
    category: "HTML & CSS",
    image: frontendmentor1,
    link1:
      "https://github.com/victorkirui/Front-end-mentor-Clipboard-Landing-Challenge",
    link3: "https://jolly-poincare-065667.netlify.app/",
    technologies: [
      "Semantic HTML5 markup",
      "Sass(Scss)",
      "Mobile-first workflow",
    ],
  },
  {
    id: 2,
    category: "WordPress",
    image: fibrconnect,
    link1: "#",
    link3: "https://fibrconnect.com/",
    technologies: ["WordPress", "CSS"],
  },
  {
    id: 3,
    category: "React",
    image: airbnb,
    link1: "https://github.com/victorkirui/Airbnb-clone",
    link3: "https://stoic-albattani-2b34e3.netlify.app/",
    technologies: [
      "React hooks",
      "css",
      "Flexbox",
      "Material-ui",
      "Netlify hosting",
      "React-router",
      "React date range picker",
    ],
  },
  {
    id: 4,
    category: "React",
    image: netflix,
    link1: "https://github.com/victorkirui/netflix-clone",
    link3: "https://netflix-clone-6d52b.web.app/",
    technologies: [
      "React hooks",
      "React-youtube",
      "Movie trailer",
      "CSS",
      "Firebase",
      "Axios",
      "TMDB",
    ],
  },
  {
    id: 5,
    category: "HTML & CSS",
    image: responsiveGrid,
    link1: "https://github.com/victorkirui/grid-challenge-hub",
    link3: "https://sleepy-kowalevski-16175c.netlify.app/",
    title: " How To Use Reactt",
    text: "Lorem ipsum Lorem ipsum Lorem Ipsum",
    technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
  },
  {
    id: 6,
    category: "HTML & CSS",
    image: frontendmentor2,
    link1: "https://github.com/victorkirui/Frontend-Mentor---Challenge-2",
    link3: "https://dazzling-fermi-a3ee80.netlify.app/",
    technologies: ["Semantic HTML5 markup", "CSS"],
  },
  {
    id: 7,
    category: "React",
    image: reactweb,
    link1:
      "https://github.com/victorkirui/React-Website-using-Styled-Components",
    link3: "https://pensive-payne-40d085.netlify.app/",
    technologies: [
      "React",
      "Styled Components",
      "React-route-dom",
      "React scroll",
      "React icons",
    ],
  },
  {
    id: 8,
    category: "WordPress",
    image: clinterpol,
    link1: "#",
    link3: "https://clinterpol.com/",
    technologies: ["WordPress", "CSS"],
  },
  {
    id: 9,
    category: "React",
    image: tesla,
    link1:
      "https://github.com/victorkirui/Tesla-homepage-clone-using-React-Redux",
    link3: "https://nifty-mcnulty-2f19fb.netlify.app/",
    technologies: [
      "React hooks",
      "React-reveal",
      "Redux",
      "Styled components",
      "Material UI",
      "React-router",
    ],
  },
  {
    id: 10,
    category: "HTML & CSS",
    image: bootstrap,
    link1:
      "https://github.com/victorkirui/Challenge1--Four-Card-Feature-Section",
    link3: "https://mystifying-feynman-1b5c64.netlify.app/",
    title: " How To Use React",
    text: "Lorem ipsum Lorem ipsum Lorem",
    technologies: [
      "HTML5",
      "Bootstrap Flexbox",
      "Bootstrap CSS Grid",
      "Mobile-first workflow",
    ],
  },
  {
    id: 11,
    category: "HTML & CSS",
    image: accurate,
    link1: "#",
    link3: "https://www.accuweights.com/",
    technologies: ["HTML5", "Bootstrap", "CSS Grid", "Javascript"],
  },
];

export default portfolios;
