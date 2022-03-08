import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        height: 100vh;
        background: url("src/assets/home/background-home-mobile.jpg");
        background-repeat: no-repeat;
        background-size: cover;
            background-position: center;

        @media (min-width: 481px) {
            background: url("src/assets/home/background-home-tablet.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }

        @media (min-width: 1025px) {
            background: url("src/assets/home/background-home-desktop.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
    }

     #root {
        height: 100%;
        width: 100%;
     }
    
`;
