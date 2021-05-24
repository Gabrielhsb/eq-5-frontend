import styles from './styles.module.scss';
import logo from '../../images/Recone.png';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link, useHistory } from 'react-router-dom';

export function Footer () {
  const history = useHistory()
  return(
    <div>
      <hr/>
      <footer className={styles.footerContainer}>
      <div  className={styles.logo}>
        <img src={logo} alt="Recone logo" onClick={() => history.push('/')}/>
        </div>
      <div className={styles.footerMenu}> 
        <div>
          <Link to="/search">Pesquisa</Link>
            <span> . </span>
            <Link to='/perfil'>Perfil</Link>
            <span> . </span>
            <Link to='/about'>Contato</Link>
        </div>

          <div className={styles.socialButtons}>
            <IconButton color="default" aria-label="instagram">
                <InstagramIcon />
            </IconButton>
            <IconButton color="default" aria-label="facebook">
                <FacebookIcon />
            </IconButton>
            <IconButton color="default" aria-label="twitter">
                <TwitterIcon />
            </IconButton>
          </div>
      </div>

    </footer>
      
    <hr/>
    <p>© Equipe 5 2021. Ioasys Camp.</p>
    </div>
  );
}