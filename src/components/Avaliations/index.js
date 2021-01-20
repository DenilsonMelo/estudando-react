import { Container, AvaliationsArea, Logo, Reviews, Stars, Title, Description, Separator } from './styles';

export default function Avaliations(props) {
    return (
        <Container>
            <Separator>
                <AvaliationsArea>
                    <h1>{props.avaliations}</h1>
                    <span>{props.avaliationsTotal}</span>
                </AvaliationsArea>
                <Logo>
                    <img src={props.logo} alt="Partnership" width="96"></img>
                </Logo>
                <Reviews>
                    <p>{props.reviews}</p>
                </Reviews>
            </Separator>
            <Separator>
                <Stars>
                    <img src="https://assets-global.website-files.com/5ef3b440084a4e99e1ef10f9/5efb61f25831ef52da74f3d3_review_stars.svg" alt="stars" />
                </Stars>
                <Title>
                    <h1>{props.title}</h1>
                </Title>
                <Description>
                    <p>{props.description}</p>
                </Description>
            </Separator>
        </Container>
    )
}
