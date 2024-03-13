import styled from "styled-components";

export const Input = styled.input`
  font-size: 1.2rem;
  outline: none;
  border: none;
  flex-grow: 1;
  padding: 0 1rem;
  &::placeholder {
    font-style: italic;
    font-size: 1rem;
    opacity: 0.7;
  }
`;
