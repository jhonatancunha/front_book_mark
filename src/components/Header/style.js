import styled from "styled-components";

// Assets
import {ReactComponent as HomeIcon} from '../../assets/home.svg';
import {ReactComponent as AddIcon} from '../../assets/add.svg';
import {ReactComponent as Logo} from '../../assets/logo.svg';

export const Container = styled.header`
  height: 60px;
  border-bottom: 2px solid ${({theme}) => theme.color.payneGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const KeyBookMark = styled.p`
  font-weight: 400;
`;

export const HomeButton = styled(HomeIcon)`
  cursor: pointer;
`;

export const AddButton = styled(AddIcon)`
  cursor: pointer;
`;

export const StyledLogo = styled(Logo)`
  height: 40px;
  width: auto;
`;