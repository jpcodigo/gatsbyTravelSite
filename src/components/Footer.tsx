import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Explorix</h1>
          <p>We strive to create the best experiences for our customers</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
          <FooterLink to="/destinations">Destinations</FooterLink>
          <FooterLink to="/sponsorships">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
          <FooterLink to="/destinations">Destinations</FooterLink>
          <FooterLink to="/sponsorships">Sponsorships</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
          <FooterLink to="/destinations">Destinations</FooterLink>
          <FooterLink to="/sponsorships">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  background-color: #fafafb;
  padding: 5rem calc((100vw - 1300px) / 2);

  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterDesc = styled.div`
  padding: 0 2rem;

  & h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkItems = styled.div`
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;
  transition: 0.3s ease-out;

  &:hover {
    color: #f26a2e;
  }
`
