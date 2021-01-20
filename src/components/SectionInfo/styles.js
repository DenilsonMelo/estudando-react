import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    align-content: center;
    text-align: center;

    margin-top: 72px;
`;

export const TitleInfo = styled.div`
    font-size: 32px;
    font-weight: bold;
`;

export const DescriptionInfo = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    
    margin-top: 28px;
    margin-bottom: 50px;

    font-size: 21px;
    color: var(--gray);

    img{
        margin: 0 8px;
    }
`;
