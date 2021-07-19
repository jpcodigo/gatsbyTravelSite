import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What people are saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline />
            <h3>Sean Micheals</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus molestias dicta optio. Rem recusandae nesciunt, debitis
              sapiente impedit animi temporibus consequatur esse molestias
              eveniet delectus eos. Ea quasi tempora cum.
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb />
            <h3>Sara Kin</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus molestias dicta optio. Rem recusandae nesciunt, debitis
              sapiente impedit animi temporibus consequatur esse molestias
              eveniet delectus eos. Ea quasi tempora cum.
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          <Images />
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fcfcfc;
  color: black;
  padding: 5rem calc((100vw - 1300px) / 2);
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  padding: 0 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  & h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  & p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
