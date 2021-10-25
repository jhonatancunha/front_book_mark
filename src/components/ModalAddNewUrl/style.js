import styled from 'styled-components';

// Assets
import {ReactComponent as CloseIcon} from '../../assets/close.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.color.modalBG};
  width: 80vw;
  height: 200px;
  border-radius: 5px;
  z-index: 10;
  position: fixed;
  margin-left: calc(50% - 40vw);
  margin-top: calc(50vh - 100px);
`;

export const BackgroundShadow = styled.div`
  position: absolute;
  background: ${({theme}) => theme.color.bg};
  opacity: 0.9;
  width: 100vw;
  height: 100vh;
  z-index: 9;
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export const Title = styled.p`
  font-weight: bolder;
  font-size: 1.2em;
  margin-bottom: 20px;
`;