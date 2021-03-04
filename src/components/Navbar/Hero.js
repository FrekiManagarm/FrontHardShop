import React from 'react';
import { Container, InnerWrapper, Left, TiltWrapper, Wrapper, Img } from './Hero.style';
import image from '../../assets/images/hero.png';
import bg from '../../assets/images/bg.png';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <Img src={image} alt="@gouthamgtronics" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default Hero
