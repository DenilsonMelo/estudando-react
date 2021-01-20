import React from 'react'
import { Container, TitleInfo, DescriptionInfo} from './styles'

export default function SectionInfo() {
    return (
        <Container>
            <TitleInfo>
                <h1>What can we help you Lower today?</h1>
            </TitleInfo>
            <DescriptionInfo>
                <p>“I couldn’t have asked for a better experience with Lower!” <strong>4.9</strong></p>               
                <img src="https://assets-global.website-files.com/5ef3b440084a4e99e1ef10f9/5efb61f25831ef52da74f3d3_review_stars.svg" alt="stars" />
                <span>(8,200+)</span>
            </DescriptionInfo>
        </Container>
    )
}
