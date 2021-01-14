import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%auto;
    }

    *, button, input{
        font-family: 'Roboto', sans-serif;

        border: 0;
        outline: 0;
    }

    #root{
        --white: #FFF;
        --gray: #B7B7B7;
        --black: #1A1A1A;
        --blue: #001CDB;
        --button-light: #DBDFFA;
    }
`;