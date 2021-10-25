import styled from "styled-components";

// Assets
import {ReactComponent as DeleteIcon} from '../../assets/delete.svg';


export const Container = styled.div`
  position: relative;
  cursor: pointer;
`;


export const Content = styled.a`
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  color: inherit;
  text-decoration: inherit;

  transition: all .2s ease-out;
  &:hover{
    box-shadow: 1px 1px 4px ${({theme}) => theme.color.purple};
    top: -4px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 3px 3px 0px 0px;
`;

export const WrapperDescription = styled.div`
  background: ${({theme}) => theme.color.secondBG};
  padding: 10px 10px;  
  border-radius: 0 0 3px 3px;
  border-top: 4px solid ${({theme}) => theme.color.payneGrey};
  height: 80px;
`;

export const Title = styled.p`
  font-size: 1.2em;
  font-weight: 500;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 0.85em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DeleteButton = styled(DeleteIcon)`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 25px;
  height: 25px;
  z-index: 10;

  transition: opacity .15s ease-in-out;
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
`;
