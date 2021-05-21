import styles from './styles.module.scss';
import logo from '../../images/Recone.png';

export function Header () {
  return(
    <div>
      <header className={styles.headerContainer}>
      <img src={logo} alt="Recone logo"/>
      <div className={styles.headerMenu}> 
        <a href=''>Pesquisa</a>
        <span> . </span>
        <a href=''>Perfil</a>
        <span> . </span>
        <a href=''>Contato</a>
      </div>

    </header>
    <hr/>
    </div>
  );
}