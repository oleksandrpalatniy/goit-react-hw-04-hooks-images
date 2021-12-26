import styles from './button.module.css';

export default function Button({ onClick }) {
  const handleSubmitButton = event => {
    event.preventDefault();
    onClick();
  };
  return (
    <div className={styles.Button_container}>
      <button
        type="submit"
        className={styles.Button}
        onClick={handleSubmitButton}
      >
        Load more...
      </button>
    </div>
  );
}
