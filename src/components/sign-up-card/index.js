import { Card } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import styles from './styles.module.scss';

export function SignUpCard () {
 
  return (
    <div>
    <Card className={styles.root} >
      <CardContent>
        <div >
          <h1 className={styles.title}>Seja bem vindo</h1>
          <h2 className={styles.subTitle}>Ainda não tem uma conta? <br/>Crie uma conta</h2>
          <button className={styles.button} >CRIAR CONTA</button>
        </div>
      </CardContent>
    </Card>
</div>
  );
}