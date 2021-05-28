import { Card } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import styles from './styles.module.scss';
import { useState, useContext } from 'react';
import StoreContext from '../store/context';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';



export function LoginCard () {
 const [ email, setEmail] = useState('');
 const [ password, setPassword] = useState('');
 const [ erro, setErro] = useState('');
 const { token, setToken, user, setUser } = useContext(StoreContext);
 const history = useHistory();



  async function login(email, password ){
 
    api({
      method: 'POST',
      url: '/login',
      data: { email: email, password: password}
    })
    .then((response) => {
      setToken(response.data.token);
      setUser(response.data);
    
    })
    .catch((err) => {
      setErro(err);
    });
  
  }
  function onSubmit(event) {
    event.preventDefault();
    login(email, password);

    if(token){

      return history.push({
        pathname: '/meu-perfil'
      });
    }
  }
  return (
    <div>
    <Card className={styles.root} >
      <CardContent>
        <div >
          <h1 className={styles.title}>Fazer Login</h1>
          <p>Acesse a sua conta</p>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.divLabel}>
              <label >Email</label><br/>
              <input className={styles.input}  type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/><br/>
            </div>
            <div className={styles.divLabel2}>
              <label >Senha</label><br/>
              <input className={styles.input}  type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/><br/>
              <span>{erro ? `Falha no login!` : ''}</span>
            </div>
            
            <input className={styles.button} type="submit" value="ENTRAR"/>
          </form>
        </div>
      </CardContent>
    </Card>
</div>
  );
}