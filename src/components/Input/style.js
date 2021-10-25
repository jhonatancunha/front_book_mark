import styled from 'styled-components';

export const WrapperInput = styled.div`
  background-color: ${({theme}) => theme.color.secondBG};
  padding: 8px;
  width: 50vw;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;

  @media(max-width: 595px){
    width: 90vw;
  }

  @media(max-width: 768px){
    width: 80vw;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  font-weight: 400;
  background-color: ${({theme}) => theme.color.secondBG};
  border: 0;
  color: ${({theme}) => theme.color.white};
  padding: 0 10px;
`;