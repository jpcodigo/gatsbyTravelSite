import React from "react"
import styled from "styled-components"
import { Btn } from "./Btn"
import Video from "../assets/video/travel"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Unreal Destinations</HeroH1>
          <HeroP>Out of this world</HeroP>
        </HeroItems>
        <Btn>Travel Now</Btn>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background-color: #0c0c0c;
  color: white;
  padding: 0 1rem;
  margin-top: -80px;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const HeroBg = styled.div``

const VideoBg = styled.video``

const HeroContent = styled.div``
const HeroItems = styled.div``
const HeroH1 = styled.h1``
const HeroP = styled.p``
