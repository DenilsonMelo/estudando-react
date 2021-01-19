import Modal from '../Modal';

import { Container } from './styles';

export default function SectionModal() {
    return (
        <Container>
            <Modal color= "#152EDE" buttonColor="#0039FF" title="Finance." info="Today's Rate" numberinfo="2.500%" 
                   description="Mortgage" button="Comparate Rates"/>
            <Modal color="#15D015" buttonColor="#00DF00" title="Save." info="HomeCash™" numberinfo="$1,0000" 
                   description="Home Savings" button="Boost My Savings"/>
            <Modal color= "#1364FF" buttonColor="#0193FF" title="Buy. Sell." info="Agents Nationwide" numberinfo="1,505" 
                   description="Real Estate" button="Get Matched"/>
            <Modal color="#5F12CF" buttonColor="#7517FF" title="Insure." info="Avg. Annual Savings" numberinfo="$894" 
                   description="Home Insurance" button="Lower My Premiums"/>
        </Container>
    )
}
