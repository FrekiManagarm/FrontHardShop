import React from 'react'
import { Action, Actions, Date, Description, StyledContainer, StyledPhoto, Title } from './Card.style'

export const Card = ({
    title,
    date,
    description,
    photo,
    comments,
    likes,
    views,
    actions
}) => (
    <StyledContainer>
        <StyledPhoto src={photo} />
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Description>{description}</Description>
    </StyledContainer>
)
