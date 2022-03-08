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
        background: url("src/assets/home/background-home-mobile.jpg");

        @media (min-width: 376px) {
            background: url("src/assets/home/background-home-tablet.jpg");
        }

        @media (min-width: 769px) {
            background: url("src/assets/home/background-home-desktop.jpg");
            background-size: cover;
        }
    }
`;
