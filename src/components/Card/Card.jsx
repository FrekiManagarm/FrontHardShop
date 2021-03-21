import React from 'react'
import { Date, Description, StyledContainer, Title } from './Card.style'

const Card = ({
    title,
    date,
    description,
    comments,
    likes,
    views,
    actions
}) => (
    <StyledContainer>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Description>{description}</Description>
        <Actions>
            
        </Actions>
    </StyledContainer>
)
