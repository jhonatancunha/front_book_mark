import styled from 'styled-components';

export const Container = styled.div``;

export const BookMarkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  gap: 20px;
`;

export const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: ${({theme}) => theme.color.bg};
  opacity: 1;
  z-index: 10;

`

export const Loading = styled.p`
  position: absolute;
  right: calc(50vw - 60px);
  top: calc(50vh - 20px);
  background: ${({theme}) => theme.color.secondBG};
  padding: 20px 60px;
  border-radius: 2px;
  font-weight: bolder;
  font-size: 1em;
  z-index: 11;
`;