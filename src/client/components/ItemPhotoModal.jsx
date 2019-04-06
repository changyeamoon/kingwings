import React from 'react';
import styled from 'styled-components';

const Modal = styled.div(props => ({
  display: props.display,
  position: 'fixed',
  'z-index': '2',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  'background-color': 'rgba(0, 0, 0, 0.4)',
}));

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:focus,
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ItemPhotoModal = ({ display, setDisplay }) => {
  return (
    <Modal
      display={display}
      onClick={e => {
        if (e.target.attributes.display && display === 'block') {
          setDisplay('none');
        }
      }}
    >
      <ModalContent>
        <CloseButton onClick={() => setDisplay('none')}>&times;</CloseButton>
        <p> Image Coming Soon </p>
      </ModalContent>
    </Modal>
  );
};

export default ItemPhotoModal;
