import styled from "styled-components";

const StyledNav = styled.nav`
  font-size: 1.9rem;
  background-color: dodgerblue;
  padding: 1rem 0;
  color: aliceblue;
  text-align: center;
  top: 0;
  width: 100vw;
  font-family: "Satisfy", cursive;
  margin-bottom: 2rem;
`;
export default function Navbar() {
  return <StyledNav>{`Yassine's Wordbook`}</StyledNav>;
}
