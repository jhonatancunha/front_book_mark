
// Styles
import {
  BackgroundShadow,
  Container,
  CloseButton,
  Title
} from './style';

// Components
import Input from '../Input';

const ModalAddNewUrl = ({open, onClose}) => {
  return open && <>
    <Container>
      <Title>ADICIONAR FAVORITO</Title>
      <CloseButton onClick={onClose} />
      <Input />
      
    </Container>
    <BackgroundShadow onClick={onClose} />
  </>
};

export default ModalAddNewUrl;