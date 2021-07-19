import React, { ReactElement } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Trips = () => {
  const data: {} = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
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
        <div key={idx}>
          <Img fluid={item.node.img.childImageSharp.fluid} />
        </div>
      )
    })
    return tripsArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
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

const ProductsWrapper = styled.div``
