// Style
import {
  Container,
  Content,
  Image,
  WrapperDescription,
  Title,
  Description,
  DeleteButton,
} from './style';

// Assets
import CustomBG from '../../assets/custom_bg.jpg';

const BookMarkCard = ({ id, name, description, image, url, remove }) => {
  return (
    <Container>
      <DeleteButton onClick={() => remove(id)} /> 
      <Content 
        href={url}
        target="_blank" 
        rel="noreferrer noopener"
      >
        <Image src={image ? image: CustomBG} />

        <WrapperDescription>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </WrapperDescription>
      </Content>
  </Container>
  );
};

export default BookMarkCard;