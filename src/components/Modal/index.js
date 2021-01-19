import { Container, Title, Info, NumberInfo, Description, Button } from './styles';

export default function Modal(props) {
    return (
        <Container style={{background:props.color}}>
            <Title>
                <h1>{props.title}</h1>
            </Title>
            <Info>
                <p>{props.info}</p>
            </Info>
            <NumberInfo>
                <span>{props.numberinfo}</span>
            </NumberInfo>
            <Description>
                <p>{props.description}</p>
            </Description>
            <Button style={{background:props.buttonColor}}>
                <span>{props.button}</span>
            </Button>
        </Container>
    )
}