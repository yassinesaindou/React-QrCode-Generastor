import styled from "styled-components";

const Nav = styled.nav`
  background-color: #0108e1a3;
  color: #e5e5e9;
  display: flex;
  font-family: "Noto Sans", sans-serif;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  letter-spacing: 1.5px;
`;
const Logo = styled.h1`
  font-size: 1.8rem;
`;
export default function Navbar() {
  return (
    <Nav>
      <Logo>QR Code Gen</Logo>
    </Nav>
  );
}
