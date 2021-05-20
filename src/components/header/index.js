import styles from './styles.module.scss';
import logo from '../../images/Recone.png';

export function Header () {
  return(
    <div>
      <header className={styles.headerContainer}>
      <img src={logo} alt="Recone logo"/>
      <div className={styles.headerMenu}> 
        <a href=''>Pesquisa</a>
        <a href=''>Perfil</a>
        <a href=''>Contato</a>
      </div>

    </header>
    <hr/>
    </div>
  );
}