import {useState} from 'react';

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
  const [keyBookMark, setKeyBookMark] = useState('');

  const handleSetKeyBookMark = (e) => {
    setKeyBookMark(e.target.value);
  }

  const handleSubmit = () => {
    console.log(keyBookMark);
  }

  return (
  <Container>
    <WrapperLogo>
      <Logo />
      <Description>
        Compartilhe com seus colegas seus <br /> sites favoritos de maneira simples
      </Description>
    </WrapperLogo>

    <Input 
      value={keyBookMark} 
      onChange={handleSetKeyBookMark} 
      placeholder="Digite a chave de acesso aqui..."
      onSubmit={handleSubmit}
    />
  </Container>
 )
};

export default Home;