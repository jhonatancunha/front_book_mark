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

const BookMarkCard = ({ title, description, image, url }) => {
  return (
    <Container>
      <DeleteButton onClick={() => console.log("deletou")} /> 
      <Content 
        href={url}
        target="_blank" 
        rel="noreferrer noopener"
      >
        <Image src={image ? image: CustomBG} />

        <WrapperDescription>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </WrapperDescription>
      </Content>
  </Container>
  );
};

export default BookMarkCard;