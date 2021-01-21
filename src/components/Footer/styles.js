import styled from 'styled-components';

export const Container = styled.div`

`;

export const Logo = styled.div`
    margin: auto auto 24px 142px;
    max-width: 90px;
`;

export const ContainerFooter  = styled.div`
    display: flex;
    justify-content: space-evenly;
    
`;

export const ItemFooter = styled.div`
    display: flex;
    flex-direction: column;

    h4{
        color: var(--black);
        padding: 10px;
    }

    span{
        color: var(--black);
        padding: 10px;

        cursor: pointer;

        :hover{
            color: var(--blue);
        }
    }
`;

export const Separator = styled.div`
    margin-left: 142px;

    border-bottom: 1px solid var(--gray);
    max-width:1080px;
    margin-top: 42px;
    margin-bottom: 16px;
`;

export const Copyright = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;

    color: var(--gray);
    font-size: 14px;

    margin-bottom: 12px;
`;

