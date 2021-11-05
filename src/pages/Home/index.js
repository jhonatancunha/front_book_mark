import {useState} from 'react';
import { useHistory } from "react-router-dom";

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

// Api
import api from '../../services/axios'

const Home = () => {
  const [keyBookMark, setKeyBookMark] = useState('');
  const history = useHistory();

  const handleSetKeyBookMark = (e) => {
    setKeyBookMark(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const { data } = await api.post('/', {
        id: keyBookMark
      });
      
      history.push(`/${data.bookmark.id}`);
    }catch(err){
      alert(err.response.data.error);
    }
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