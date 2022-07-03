import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
// :root{
//     --primary-color: #007bff;
//     --primary-color-LIGHT: #057FFF;
//     --secondary-color: #6c757d;
//     --background-dark-color: #10121a;
//     --background-dark-color-grey: #191D2B;
//     --border-color: #2e344e;
//     --background-light-color: #f1f1f1;
//     --background-light-color-2: RGBA(3,127,255,.3);
//     --white-color: #ffffff;
//     --font-light-color: #a4acc4;
//     --font-dark-color: #313131;
//     --font-dark-color-2: #151515;
//     --sidebar-dark-color: #191D2B;
//     --scrollbar-bg-color: #383838;
//     --scrollbar-thump-color: #6b6b6b;
//     --scrollbar-track-color: #383838;
// }
.light-theme{
    --primary-color: #4D868C; 
    --btn-color:#fff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #F1F1F1;
    --background-dark-color-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #f1f1f1;
    --background-light-color-2: RGBA(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
.dark-theme{
    --btn-color:#fff;
    --primary-color: #189ab4;
    --primary-color-LIGHT: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121a;
    --background-dark-color-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #f1f1f1;
    --background-light-color-2: RGBA(3,127,255,.3);
    --white-color: #ffffff;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style-type:none;
    text-decoration:none;
    font-family: 'Nunito', sans-serif;
    font-size:1.2rem;
}
body{
    background: var(--background-dark-color);
    color: var(--font-light-color);
}
body::-webkit-scrollbar{
    background:#6b6b6b;
    width:6px;
}
body::-webkit-scrollbar-thumb{
    background: var(--primary-color);
    border-radius:10px;
}
body::-webkit-scrollbar-thumb-track{
    background:#6b6b6b;
    border-radius:10px;
}
a{
    color: inherit;
}

h1{
    font-size:2.2rem;
    color: var(--white-color);
    span{
        font-size:2.2rem;
    }
    @media screen and (max-width:768px){
        font-size:1.9rem;
        span{
        font-size:1.9rem;
    }
    }
    @media screen and (max-width:425px){
        font-size:1.6rem;
        span{
        font-size:1.6rem;
    }
    }
}
p{
    font-size:0.9rem;
}
/* UTITLITIES */
.resume-margin-b-utility-class{
margin-bottom:3rem;

@media screen and (max-width:500px){
    margin-bottom:2rem;
}
}

// TOGGLER LIGHT-DARK THEME
.nav-toggle{
    transform: translateX(0);
  }
`;

export default GlobalStyles;
