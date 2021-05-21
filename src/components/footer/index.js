import styles from './styles.module.scss';
import logo from '../../images/Recone.png';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export function Footer () {
  return(
    <div>
      <hr/>
      <footer className={styles.footerContainer}>
      <img src={logo} alt="Recone logo"/>

        <div> 
          <a href=''>Pesquisa</a>
          <span> . </span>
          <a href=''>Perfil</a>
          <span> . </span>
          <a href=''>Contato</a>
        </div>

        <div className={styles.socialButtons}>
        <IconButton color="default" aria-label="instagram">
              <InstagramIcon />
        </IconButton>

        <IconButton color="default" aria-label="facebook">
              <FacebookIcon />
        </IconButton>
        </div>

    </footer>
      
    <hr/>
    <p>© Equipe 5 2021. Ioasys Camp.</p>
    </div>
  );
}