import styles from './styles.module.scss';
import logo from '../../images/Recone.png';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import StoreContext from '../../components/store/context';

export function Header () {
  const { token } = useContext(StoreContext);
  const history = useHistory()
  return(
    <div>
      <header className={styles.headerContainer}>
        <div  className={styles.logo}>
        <img src={logo} alt="Recone logo" onClick={() => history.push('/')}/>
        </div>
      <div className={styles.headerMenu}> 
        <Link to="/search">Profissionais</Link>
        <span> . </span>
        <Link to='/perfil'>{token ? 'Perfil' : 'Login'}</Link>
        <span> . </span>
        <Link to='/about'>Somos</Link>
      </div>
    </header>
    <hr/>
    </div>
  );
}





