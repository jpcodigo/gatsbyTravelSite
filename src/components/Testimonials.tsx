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
        <ColumnTwo>Image</ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div``
const TopLine = styled.div``
const Description = styled.div``
const ContentWrapper = styled.div``
const ColumnOne = styled.div``
const Testimonial = styled.div``
const ColumnTwo = styled.div``
