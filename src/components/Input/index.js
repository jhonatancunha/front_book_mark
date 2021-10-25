// Style
import {
  WrapperInput, 
  StyledInput
} from './style';

// Components
import Button from '../Button';

const Input = () => {
  return (
    <WrapperInput>
      <StyledInput placeholder="Digite a chave de acesso aqui..." />
      <Button />
    </WrapperInput>
  )
};


export default Input;