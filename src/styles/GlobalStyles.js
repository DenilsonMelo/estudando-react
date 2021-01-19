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

        --modal-blue: linear-gradient(90deg, rgba(24,26,106,1) 0%, rgba(7,34,220,1) 50%, rgba(24,26,106,1) 100%);;
        --modal-green: linear-gradient(90deg, rgba(11,33,10,1) 0%, rgba(8,205,8,1) 50%, rgba(13,43,12,1) 100%);
        --modal-blue-light: #085DFF;
        --modal-purple: #5707CD;

    }
`;