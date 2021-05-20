import { Card } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import styles from './styles.module.scss';




export function LoginCard () {
  return (
    <div>
    <Card className={styles.root} >
      <CardContent>
        <div >
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
      </CardContent>
    </Card>
</div>
  );
}