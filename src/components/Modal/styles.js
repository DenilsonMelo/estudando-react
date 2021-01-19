import styled from 'styled-components';

export const Container = styled.div`
    width: 270px;
    height: 350px;
    
    margin: 22px;

    border-radius: 16px;

    cursor: pointer;

    :hover{
        width: 290px;
        height: 370px;
    }
`;

export const Title = styled.div`
    color: var(--white);
    font-size: 14px;
    font-weight: 500;

    padding-top: 32px;
    padding-left: 32px;
`;

export const Info = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;

    color: var(--white);
    font-weight: bold;
    font-size: 18px;

    margin-top: 36px;
`;

export const NumberInfo = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;

    color: var(--white);
    font-weight: bold;
    font-size: 36px;

    margin-top: 12px;
`;

export const Description = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;

    color: var(--white);
    font-weight: normal;

    margin-top: 36px;
`;

export const Button = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 36px auto 0;
    
    cursor: pointer;

    width: 210px;
    height: 60px;
    border-radius: 32px;
    background-color: var(--blue-light);

    span{
        color: var(--white);
        font-weight: bold;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
