import { useState } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [imagePage, setImagePage] = useState(1);

  const handleFormSubmit = (imageName, imagePage) => {
    setImagePage(1);
    setImageName(imageName);
  };
  const handleButtonSubmit = () => {
    setImagePage(prevState => prevState + 1);
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} imagePage={imagePage} />
      <ImageGallery imageName={imageName} imagePage={imagePage} />

      {imageName && (
        <Button onClick={handleButtonSubmit} imagePage={imagePage} />
      )}
    </>
  );
}
