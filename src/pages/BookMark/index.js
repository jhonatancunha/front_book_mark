import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookMarkMockup from '../../mockups/bookmark';

// Components
import Header from '../../components/Header';
import BookMarkCard from '../../components/BookMarkCard';
import ModalNewUrl from '../../components/ModalAddNewUrl';

// Styles
import {
  Container, 
  BookMarkContainer,
} from './style';

const BookMark = () => {
  const params = useParams();
  const [modalNewURL, setOpenModalNewURL] = useState(false);

  const handleModalNewURL = () => {
    setOpenModalNewURL(prevState => !prevState);
  }

  return (
    <Container>
      <Header keyBookMark={params.id} handleNewURL={handleModalNewURL} />

      <ModalNewUrl open={modalNewURL} onClose={handleModalNewURL} />

      <BookMarkContainer>
        {BookMarkMockup.map(bookMark => (
            <BookMarkCard
              key={bookMark.id}
              title={bookMark.title} 
              description={bookMark.description} 
              image={bookMark.image}
              url={bookMark.url}
            />
        ))}
      </BookMarkContainer>
    </Container>
  )
};

export default BookMark;