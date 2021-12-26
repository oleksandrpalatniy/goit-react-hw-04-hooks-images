import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './loader.module.css';

export default function LoaderSpinner() {
  //other logic

  return (
    <Loader
      className={styles.LoaderSpinner}
      type="Bars"
      color="#00BFFF"
      height={100}
      width={100}
      //  timeout={3000} //3 secs
    />
  );
}
