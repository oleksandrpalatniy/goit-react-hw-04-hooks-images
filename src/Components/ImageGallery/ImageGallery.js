import { useEffect, useState } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';
import fetchAPI from '../Fetch/Fetch';
import LoaderSpinner from '../Loader/Loader';
import Modal from '../Modal/Modal';

export default function ImageGallery({ imageName, imagePage }) {
  const [imageListArr, setImageListArr] = useState([]);
  const [spin, setSpin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [largeImageTags, setLargeImageTags] = useState('');

  useEffect(() => {
    if (!imageName) {
      return;
    }
    setSpin(true);
    fetchAPI
      .fetchImage(imageName, imagePage)
      .then(imageList => setImageListArr(imageList.hits))
      .catch(() => alert(''))
      .finally(setSpin(false));
  }, [imageName, imagePage]);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = item => {
    setShowModal(!showModal);
    setLargeImageURL(item.largeImageURL);
    setLargeImageTags(item.tags);
  };

  return (
    <>
      {spin && <LoaderSpinner />}
      <ul className={styles.ImageGallery}>
        <ImageGalleryItem
          imageListArr={imageListArr}
          onOpenModal={toggleModal}
        />
      </ul>
      {showModal && (
        <Modal
          onClose={closeModal}
          largeUrl={largeImageURL}
          tag={largeImageTags}
        ></Modal>
      )}
    </>
  );
}
