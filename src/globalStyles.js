import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
body{
    background: #5C258D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4389A2, #5C258D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4389A2, #5C258D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;
    overflow: hidden;
}

a{
    color: #fff;
    text-decoration: underline;

    &:hover{
        text-decoration: none;
    }
}

label{
    line-height: 40px;
}
input{
    text-align: center;
  border: none;
}
`;

export default GlobalStyle;
