import { Container } from './styles';

import Avaliations from '../Avaliations';

export default function SectionAvaliations() {
    return (
        <Container>
            <Avaliations avaliations="4.9" avaliationsTotal="/ 5" logo="https://assets-global.website-files.com/5ef3b440084a4e99e1ef10f9/5efb5ca6ee1c768536fc1b01_logo_zillow.png"  
                reviews="2,826 Reviews" title="Great Refi experience." description="Process was remarkably easy 
                and fast. Best mortgage/refi experience we have ever had. No hassles and excellent customer 
                service! We will definitely recommend them to our friends and family."/>
        
            <Avaliations avaliations="5.0" avaliationsTotal="/ 5" logo="https://assets-global.website-files.com/5ef3b440084a4e99e1ef10f9/5efc8fcd7e06944d18f67b50_logo_google.png"
                reviews="1,309 Reviews" title="Lower was phenomenal!" description="I shopped around with four other
                lenders in regards to refinancing our home, and Lower was exceptional. Matt was the most 
                professional, knowledgeable, and able to get our family the lowest interest rate with the cheapest 
                fees. The entire process was effortless and very fast! I would highly recommend Matt and Lower with 
                all closings."/>

            <Avaliations avaliations="4.9" avaliationsTotal="/ 5" logo="https://assets-global.website-files.com/5ef3b440084a4e99e1ef10f9/5efc8fcdde3de621dc443abc_logo_facebook.png"
                reviews="1,897 Reviews" title="The entire process was very easy." description="They had good 
                technology in place for review and signing of documents. The coordination to make sure I was 
                kept informed was very good. I would definitely recommend them and have recommended my agent 
                to others who would be interested in refinancing."/>

            <Avaliations avaliations="4.9" avaliationsTotal="/ 5" logo="https://assets-global.website-files.com/5ef3b440084a4e99e1ef10f9/5efb5ca6402abeb21a4f147a_logo_lendingtree.png"
                reviews="2,228 Reviews" title="Awesome experience!" description="This has been the easiest and quickest 
                refi I have ever done. Sam was very knowledgeable and helpful and spoke to me in layman terms so I 
                understood everything. He had no issues calling me back numerous times to answer my husbands questions 
                and would get back to me very quickly."/>    
        
        </Container>
    )
}
