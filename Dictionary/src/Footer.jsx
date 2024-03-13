import styled from "styled-components";

const StyledFooter = styled.footer`
 padding: 1.5rem 0;
 width: fit-content;
  background-color: #4a4a4a;
  color: aliceblue;
  text-align: center;
  font-size: 1.2rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: inline-block;
  
`;


export default function Footer() {
  return <StyledFooter>Made with 💖 by Yassine</StyledFooter>;
}
