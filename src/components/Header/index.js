import { Container, Logo, HeaderItem, ButtonStart } from './styles'

export default function Header(){
    return (
        <Container>

            <Logo><img src='logo.png' alt="logo"></img></Logo>
            
            <HeaderItem><span>Finance</span></HeaderItem>
            <HeaderItem><span>Refinance</span></HeaderItem>
            <HeaderItem><span>Save</span></HeaderItem>
            <HeaderItem><span>Buy/Sell</span></HeaderItem>
            <HeaderItem><span>Insure</span></HeaderItem>
            <HeaderItem><span>Advice</span></HeaderItem>

            <ButtonStart>Start here</ButtonStart>

        </Container>
    )
}