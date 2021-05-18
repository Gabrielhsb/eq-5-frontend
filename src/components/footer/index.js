import styles from './styles.module.scss';
import logo from '../../images/Recone.png';

export function Footer () {
  return(
    <div>
      <hr/>
      <footer className={styles.footerContainer}>
      <img src={logo} alt="Recone logo"/>
        <a href=''>Pesquisa</a>
        <a href=''>Perfil</a>
        <a href=''>Contato</a>
    </footer>
      
    <hr/>
    <p>© Equipe 5 2021. Ioasys Camp.</p>
    </div>
  );
}