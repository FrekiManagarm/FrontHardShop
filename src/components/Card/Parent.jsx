import { FaCommentAlt, FaRegEye, FaThumbsUp } from 'react-icons/fa';
import React from 'react'
import { StyledContainer, StyledRoot } from './Parent.style';
import { Card } from './Card';

const Parent = () => {

    const date = new Date().toLocaleDateString()

    const onCommentClick = () => alert('You clicked comments');
    const onLikesClick = () => alert('You Clicked Like');
    const onViewsClick = () => alert('You clicked views');

    const buttons = [
        {
            label: (
                <div>
                    <FaCommentAlt />
                </div>
            ),
            onClick: onCommentClick,
        },
        {
            label: (
                <div>
                    <FaThumbsUp />
                </div>
            ),
            onClick: onLikesClick,
        },
        {
            label: (
                <div>
                    <FaRegEye />
                </div>
            ),
            onClick: onViewsClick,
        }
    ]

    return (
        <StyledRoot>
            <StyledContainer>
                <Card 
                    title="A Card or Something"
                    date={date}
                    description="lorem Ipsum"
                    actions={buttons}
                    photo="https://i.imgur.com/q2MZEWb.jpg"
                />
            </StyledContainer>
        </StyledRoot>
    )
}

export default Parent
