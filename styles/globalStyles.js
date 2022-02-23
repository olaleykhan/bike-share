import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    /* font-size: 10px; */
    @media only screen and (max-width: 600px) {font-size:10px}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {font-size: 14px}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {font-size:16px}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {font-size:18px}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {font-size:20px}
}   

  body {
    margin: 0;
    padding: 0;
    /* background: teal; */
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: url("/static/background.png");
  }
  h1{
    font-size:3.5rem;
    font-weight:700;
}
h2{
    font-size:  2rem;
    
}
h1,h2,h3,h4,h5,h6{font-family: 'Mochiy Pop P One', sans-serif;
color:${(props) => props.theme.dark}
}

a{
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}
button{
    border: none;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    /* font-weight: 600; */
    font-size: 1rem;
}

.sub-title{
    font-size: 1.5rem;
    line-height: 2rem;
}
/* .cardLayout {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 1.5rem;
  row-gap: 1.5rem;
} */
`;

export default GlobalStyle;
