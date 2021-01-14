import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;

    max-width: 925px;
    margin: 56px auto;
    
    h1{
        font-size: 100px;
        font-weight: bold;    

        color: var(--black);
    }
`;

export const Subtitle = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;

    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 80px;
    p{
        font-size: 21px;
        line-height: 32px;

        color: var(--black);
    }
`;

export const PartnerContainer = styled.div`
    margin: 0 auto;

    justify-content: center;
    display: flexbox;
    text-align: center;
    align-items: center;
`;

export const Partnership = styled.div`
    justify-content: space-around;
    text-align: center;

    span{
        margin: 0 43px;

        font-size: 18px;
        font-weight: bold;

        color: var(--black);
    }

    img{
        margin: 0 43px;
    }
`;