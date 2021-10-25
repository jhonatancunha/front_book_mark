// Style
import {
  Container,
  Image,
  WrapperDescription,
  Title,
  Description,
  DeleteButton
} from './style';

// Assets
import CustomBG from '../../assets/custom_bg.jpg';

const BookMarkCard = ({ title, description, image }) => {

  return (
    <Container>
       <DeleteButton /> 
       <Image src={image ? image: CustomBG} />

      <WrapperDescription>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </WrapperDescription>
    </Container>
  );
};

export default BookMarkCard;