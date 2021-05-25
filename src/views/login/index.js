import { Footer } from '../../components/footer';
import {LoginCard} from '../../components/login-card';
import {SignUpCard} from '../../components/sign-up-card';

import styles from './styles.module.scss';

export default function Login() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
          <div className={styles.loginCard}>
              <LoginCard/>
          </div>
          <div className={styles.mobileLogin}>
            <h1 className={styles.title}>Fazer Login</h1>
            <p>Acesse a sua conta</p>
            <form className={styles.form}>
              <div className={styles.divLabel}>
                <label >Email</label><br/>
                <input className={styles.input}  type="email" id="email" /><br/>
              </div>
              <div className={styles.divLabel}>
                <label >Senha</label><br/>
                <input className={styles.input}  type="password" id="password"/><br/>
              </div>
              <input className={styles.button} type="submit" value="ENTRAR"/>
            </form>
          </div>
          <div className={styles.signUpCard}>
              <SignUpCard/>
          </div>
      </div>
      <div className={styles.footer}>
      <Footer/>
      </div>
    </div>
    
  )
}