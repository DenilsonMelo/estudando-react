import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;
`;

export const AvaliationsArea = styled.div`
    display: flex;

    margin-bottom: 20px;

    h1{
        font-size: 60px;
        font-weight: 400;
    }

    span{
        font-size: 28px;
        font-weight: 400;
        margin-left: 8px;
        margin-top: 28px;
    }
`;

export const Logo = styled.div`
    margin-bottom: 8px;
`;

export const Reviews = styled.div`
    p{  
        max-width: 90px;
        font-size: 14px;
        color: var(--gray);
        border-bottom: 1px solid var(--gray);

        cursor: pointer;
    }
`;

export const Stars = styled.div`

`;

export const Title = styled.div`
    font-size: 12px;
    margin: 14px auto;
    
    padding-right: 24px;
`;

export const Description = styled.div`
    max-width: 425px;

    p{
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;

        color: var(--gray);
    }
    
`;

export const Separator = styled.div`
    margin-left: 112px;
    margin-right: 42px;
`;
