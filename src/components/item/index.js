import styles from './styles.module.scss';

export default function Item (props) {
  return(
    <div>
      <button className={styles.button}>{props.title}</button>
    </div>
  );
}