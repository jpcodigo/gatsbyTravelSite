import styled from "styled-components"
import { Link } from "gatsby"

export const Btn = styled(Link)`
  background-color: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: white;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background-color: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
    transform: translateY(-2px);
  }
`
