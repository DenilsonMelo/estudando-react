import { Container, Logo, ContainerFooter, ItemFooter, Separator, Copyright } from '../Footer/styles'

export default function Footer() {
    return (
        <Container>
            <Logo><img src='https://assets-global.website-files.com/5ef3b440084a4e99e1ef10f9/5fb3ec6369104f1845f3c347_logo_lower_tm.svg' alt="logo"></img></Logo>

            <ContainerFooter>
                <ItemFooter>
                    <h4>Products</h4>
                    <span>Finance.</span>
                    <span>Refinance.</span>
                    <span>Buy. Sell.</span>
                    <span>Save.</span>
                    <span>Insure</span>
                </ItemFooter>

                <ItemFooter>
                    <h4>About</h4>
                    <span>Company</span>
                    <span>Careers</span>
                    <span>News</span>
                    <span>Learn</span>
                </ItemFooter>

                <ItemFooter>
                    <h4>Tools</h4>
                    <span>Lower App</span>
                    <span>Refi Calculator</span>
                    <span>HELOC Calculator</span>
                    <span>VA Calculator</span>
                    <span>Secure Upload</span>
                </ItemFooter>

                <ItemFooter>
                    <h4>Support</h4>
                    <span>Care</span>
                    <span>1 (833) 920-2273</span>
                    <span>Care@lower.com</span>
                </ItemFooter>

                <ItemFooter>
                    <h4>Connect</h4>
                    <span>Facebook</span>
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                    <span>Glassdoor</span>
                    <span>Zillow</span>
                </ItemFooter>
            </ContainerFooter>

            <Separator />

            <Copyright>
                <p>Copyright © 2020  Lower. All rights reserved.</p>
            </Copyright>

        </Container>
    )
}
