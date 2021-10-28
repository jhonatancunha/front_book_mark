import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Header from '../../components/Header';
import BookMarkCard from '../../components/BookMarkCard';
import ModalNewUrl from '../../components/ModalAddNewUrl';
import ModalRemove from '../../components/ModalDelete';

// Api
import api from '../../services/axios'

// Styles
import {
  Container, 
  BookMarkContainer,
  Loading,
  BlurBackground
} from './style';

const BookMark = () => {
  const params = useParams();
  const [bookMarks, setBookMarks] = useState([]);
  const [url, setUrl] = useState('');
  const [modalNewURL, setOpenModalNewURL] = useState(false);
  const [openModelDelete, setOpenModelDelete] = useState(false);
  const [idLinkRemoved, setIdLinkRemoved] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleModalNewURL = () => {
    setOpenModalNewURL(prevState => !prevState);
  }

  const handleModalDelete = (id) => {
    setOpenModelDelete(prevState => !prevState);
    setIdLinkRemoved(id);
  }


  const handleChangeUrl = (e) => {
    setUrl(e.target.value);
  }

  const handleSubmit = async () => {
    try {

      setLoading(true);
      await api.post('/create-link', {
        id_book_mark: params.id,
        url
      });

      setOpenModalNewURL(false);
      setLoading(false);
    } catch (err) {
      throw err;
    }
  }

  const handleRemove = async () => {
    try {
      setLoading(true);
      await api.delete(`/delete-link/${idLinkRemoved}`);
      handleModalDelete(null);
      setLoading(false);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const fetchBookMark = async () => {
      try {
        const { data } = await api.get(`/${params.id}`);

        setBookMarks(data);
      }catch(err){
        throw err;
      }

    };


    fetchBookMark();
  }, [params.id, modalNewURL, openModelDelete])

  return (
    <Container>
      <Header keyBookMark={params.id} handleNewURL={handleModalNewURL} />

      <ModalNewUrl 
        url={url}
        handleChangeUrl={handleChangeUrl}
        handleSubmit={handleSubmit}
        open={modalNewURL} 
        onClose={handleModalNewURL}
      />

      <ModalRemove 
        handleDelete={handleRemove}
        open={openModelDelete} 
        onClose={handleModalDelete}
      />

      <BookMarkContainer>
        {bookMarks.map(bookMark => (
            <BookMarkCard
              key={bookMark.id}
              id={bookMark.id}
              name={bookMark.name} 
              description={bookMark.description} 
              image={bookMark.image}
              url={bookMark.url}
              remove={handleModalDelete}
            />
        ))}
      </BookMarkContainer>

      {loading && <BlurBackground>
          <Loading>
            Carregando...
          </Loading>
        </BlurBackground>
      }
    </Container>
  )
};

export default BookMark;