import React from 'react'
import { BtnContainer, Container } from './HeroText.style'

const HeroText = () => {
  return (
    <Container>
      <h5>Formations en ligne pour tout les âges</h5>
      <h1>Learn</h1>
      <h1>Anything.</h1>
      <h1>Anytime.</h1>
      <h1>Anywhere.</h1>
      <BtnContainer>
        <button className="readmore">En savoir plus</button>
        <button>7 jours d'essai gratuit</button>
      </BtnContainer>
    </Container>
  );
};

export default HeroText
