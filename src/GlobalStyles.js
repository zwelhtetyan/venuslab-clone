import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
        --text-dark: #111;
        --black: #222;
        --primary: #EFC30F;
        --white: #fff;
        --transition2s: all 0.2s linear;
        --transition3s: all 0.3s linear;
        --transition5s: all 0.5s linear;
        --transition7s: all 0.7s linear;
        --transition5sEI: all 0.5s ease-in;
        --main-padding: 60px 4rem;
        --mid-padding: 60px 2.5rem;
        --low-paddiing: 60px 1rem;
        --light-gray: #ddd;
        --pale-light: #f4f4f4;
        --pure-light: #eee;
    }

    /* font-family: 'Oswald', sans-serif;
    font-family: 'Barlow', sans-serif; */


    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: var(--light-gray);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--primary);
    }

    @media screen and (max-width: 768px){
        ::-webkit-scrollbar {
            display: none;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif;
        /* scroll-behavior: smooth; */
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
    }


`;
