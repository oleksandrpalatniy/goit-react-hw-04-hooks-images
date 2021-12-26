import { useState } from 'react';
import styles from './searchbar.module.css';

export default function Searchbar({ imagePage, onSubmit }) {
  const [imageFindName, setImageFindName] = useState('');

  const handleNameChange = event => {
    setImageFindName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (imageFindName.trim() === '') {
      alert('Please enter name of image...');
      return;
    }
    onSubmit(imageFindName, imagePage);
    setImageFindName('');
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchForm_button}>
          <span className={styles.SearchForm_button_label}>Search</span>
        </button>

        <input
          value={imageFindName}
          onChange={handleNameChange}
          className={styles.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
