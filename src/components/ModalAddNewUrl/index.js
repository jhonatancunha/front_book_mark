
// Styles
import {
  BackgroundShadow,
  Container,
  CloseButton,
  Title
} from './style';

// Components
import Input from '../Input';

const ModalAddNewUrl = ({open, onClose, url, handleChangeUrl, handleSubmit}) => {
  

  return open && <>
    <Container>
      <Title>ADICIONAR FAVORITO</Title>
      <CloseButton onClick={onClose} />
      <Input
        value={url}
        onChange={handleChangeUrl}
        placeholder="Cole a URL aqui..."
        onSubmit={handleSubmit}
      />
      
    </Container>
    <BackgroundShadow onClick={onClose} />
  </>
};

export default ModalAddNewUrl;