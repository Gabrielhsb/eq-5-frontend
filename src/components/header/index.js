import styles from './styles.module.scss';
import logo from '../../images/Recone.png';
import { Link, useHistory } from 'react-router-dom';
export function Header () {
  const history = useHistory()
  return(
    <div>
      <header className={styles.headerContainer}>
        <div  className={styles.logo}>
        <img src={logo} alt="Recone logo" onClick={() => history.push('/')}/>
        </div>
      <div className={styles.headerMenu}> 
        <Link to="/search">Pesquisa</Link>
        <span> . </span>
        <Link to='/perfil'>Perfil</Link>
        <span> . </span>
        <Link to='/about'>Contato</Link>
      </div>
    </header>
    <hr/>
    </div>
  );
}





