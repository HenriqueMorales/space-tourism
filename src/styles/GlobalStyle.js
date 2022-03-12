import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: url("src/assets/home/background-home-mobile.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        height: 100vh;
        overflow: hidden;

        @media (min-width: 550px) {
            background: url("src/assets/home/background-home-tablet.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }

        @media (min-width: 1400px) {
            background: url("src/assets/home/background-home-desktop.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
    }

     #root {
        height: 100%;
        
     }
    
`;
