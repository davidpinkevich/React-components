import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.loading}>
      Find heroes <span className={styles.oneElem}></span>
      <span className={styles.twoElem}></span>
      <span className={styles.threeElem}></span>
    </div>
  );
}

export default Loading;
