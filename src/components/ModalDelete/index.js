
// Styles
import {
  BackgroundShadow,
  Container,
  CloseButton,
  Title
} from './style';

// Components
import Button from '../Button';

const ModalAddNewUrl = ({open, onClose, handleDelete}) => {
  

  return open && <>
    <Container>
      <Title>DESEJA REALMENTE REMOVER O FAVORITO?</Title>
      <CloseButton onClick={onClose} />
      <Button onClick={handleDelete}>CONFIRMAR</Button>
    </Container>
    <BackgroundShadow onClick={onClose} />
  </>
};

export default ModalAddNewUrl;