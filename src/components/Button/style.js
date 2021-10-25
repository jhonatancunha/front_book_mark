import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: bold;
  color: ${({theme}) => theme.color.white};
  background-color: ${({theme}) => theme.color.purple};
  border: 0;
  padding: 10px 45px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 1em;

  transition: opacity .15s ease-in-out;
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
`;