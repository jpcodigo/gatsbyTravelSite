import React, { ReactElement } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Btn } from "./Btn"
import { ImLocation } from "react-icons/im"

const Trips = ({ heading }) => {
  const data: {} = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            btn
            name
            img {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray: ReactElement[] = []
    data.allTripsJson.edges.forEach((item, idx) => {
      tripsArray.push(
        <ProductCard key={idx}>
          <ProductImg
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Btn
              to="/trips"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.btn}
            </Btn>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
    </ProductsContainer>
  )
}

export default Trips

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background-color: white;
  color: white;
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: black;
`

const ProductsWrapper = styled.div`
  padding: 0 2rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  border-radius: 10px;

  position: relative;
`

const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  border-radius: 10px;
  filter: brightness(60%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  position: relative;

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  position: absolute;
  top: 375px;

  display: flex;
  align-items: center;
`

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
