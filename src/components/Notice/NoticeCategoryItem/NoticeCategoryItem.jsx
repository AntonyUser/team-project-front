import { useState } from 'react';
import style from './NoticeCategoryItem.styled';
import Modal from 'components/Notice/ModalNotice';

const {
  Image,
  Card,
  Category,
  Like,
  ItemTitle,
  List,
  Item,
  Span,
  Loadmore,
  Delete,
  HeartIcon,
} = style;

export const NoticeCategoryItem = () => {
  const [showModal, setShowModal] = useState(false);

  if (showModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <Card>
      <Category>Sell</Category>
      <Like type="button">
        <HeartIcon />
      </Like>
      <Image
        src="https://img.tsn.ua/cached/905/tsn-f31867ea2500d8c162f8e1b3822736e1/thumbs/1116x628/3b/a5/bf386a0a6b5fb77653ad65c3ca3da53b.jpeg"
        alt="dog"
      />
      <ItemTitle>Сute dog looking for a home</ItemTitle>
      <List>
        <Item>
          <Span>Breed:</Span>
          <Span>Pomeranian</Span>
        </Item>
        <Item>
          <Span>Place:</Span>
          <Span>Lviv</Span>
        </Item>
        <Item>
          <Span>Age:</Span>
          <Span>one year</Span>
        </Item>
      </List>
      <Loadmore onClick={toggleModal} type="button">
        Learn more
      </Loadmore>
      <Delete>Delete</Delete>
      {showModal && <Modal toggle={toggleModal} />}
    </Card>
  );
};
