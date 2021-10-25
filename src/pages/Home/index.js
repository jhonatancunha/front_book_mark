// Assets
import {ReactComponent as Logo} from '../../assets/logo.svg';

// Style
import {
  Container, 
  Description, 
  WrapperLogo
} from './style';

// Components
import Input from '../../components/Input';

const Home = () => {

  return (
  <Container>
    <WrapperLogo>
      <Logo />
      <Description>
        Compartilhe com seus colegas seus <br /> sites favoritos de maneira simples
      </Description>
    </WrapperLogo>

    <Input />
  </Container>
 )
};

export default Home;