import { Link } from 'react-router-dom';

// Styles
import {
  Container,
  LeftWrapper,
  KeyBookMark,
  HomeButton,
  AddButton,
  StyledLogo
} from './style';



const Header = ({handleNewURL, keyBookMark}) => {
  return (
    <Container>
      <LeftWrapper>
        <Link to='/'>
          <HomeButton />
        </Link>
        <AddButton onClick={handleNewURL} />
        <KeyBookMark>{keyBookMark}</KeyBookMark>
      </LeftWrapper>
      <StyledLogo />
    </Container>
  );
};

export default Header;