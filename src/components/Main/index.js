import { Container, Title, Subtitle, PartnerContainer, Partnership } from './styles';

export default function Main() {
    return (
        <Container>
            <Title>
                <h1>
                    Everything for your home, for Lower.
                </h1>
            </Title>
            <Subtitle>
                <p>The place to finance, buy, sell, insure or save for a home.
                    Everything you need. One amazing experience. All for less.
                </p>
            </Subtitle>

            <PartnerContainer>
                <Partnership>
                    <span>Featured on:</span>
                </Partnership>

                <Partnership>
                    <img src="https://assets-global.website-files.com/5ef3b440084a4e99e1ef10f9/5efb5ca6ee1c768536fc1b01_logo_zillow.png" alt="Partnership" width="96"></img>
                </Partnership>
                <Partnership>
                    <img src="https://assets-global.website-files.com/5ef3b440084a4e99e1ef10f9/5efb5ca62c03dd02922836a1_logo_bankrate.png" alt="Partnership" width="93"></img>
                </Partnership>
                <Partnership>
                    <img src="https://assets-global.website-files.com/5ef3b440084a4e99e1ef10f9/5f5a75b82c115aa044409d1e_logo_lendingtree_0810.png" alt="Partnership" width="116"></img>
                </Partnership>
            </PartnerContainer>

        </Container>
    )
}
