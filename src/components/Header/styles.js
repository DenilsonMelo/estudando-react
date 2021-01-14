import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
`;

export const Logo = styled.div`
    padding-left: 42px;
    padding-right: 188px;
`;

export const HeaderItem = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: var(--black);
    margin: 0 auto;

    cursor: pointer;

    :hover{
        transition: 0.2s;
        color: var(--blue);
        border-bottom: 3px solid var(--blue);
    }
`;

export const ButtonStart = styled.div`
    padding: 0 18px;
    margin-right: 90px;
    margin-left: 185px;
    height: 40px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    background-color: rgba(0,28,219,.1);

    font-size: 18px;
    font-weight: 600;
    color: var(--blue);

    cursor: pointer;

    :hover{
        background-color: var(--blue);
        color: var(--white);
        transition: 0.2s;
    }
`;
