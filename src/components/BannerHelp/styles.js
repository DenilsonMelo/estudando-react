import styled from 'styled-components';

export const Container = styled.div`

    justify-content: center;
    align-items: center;

    margin-top: 190px;
    margin-bottom: 120px;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    margin-bottom: 36px;
    
    h1{
        font-size: 96px;
        line-height: 100px;

        color: var(--black);
    }
`;

export const Subtitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h3{
        font-size: 26px;

        color: var(--blue)
    }
`;