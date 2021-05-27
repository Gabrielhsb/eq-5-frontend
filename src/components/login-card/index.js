import { Card } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import styles from './styles.module.scss';
import { useState, useContext } from 'react';
import StoreContext from '../store/context';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';





function initialState() {
  return { email: '', password: '' };
}


async function login({email, password} ){
  api({
    method: 'POST',
    url: '/login',
    data: { email: email, password: password}
  })
  .then((response) => console.log(response.data))
  .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
  });

}


export function LoginCard () {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value , name } = event.target;
    
    setValues({
      ...values,
      [name]: value
    });
  }


  function onSubmit(event) {
    event.preventDefault();
    const {token} = login("values");

    if(token){
      setToken(token);
      return history.push('/perfil');
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
              <input className={styles.input}  type="email" name="email" onChange={onChange} value={values.email}/><br/>
            </div>
            <div className={styles.divLabel2}>
              <label >Senha</label><br/>
              <input className={styles.input}  type="password" name="password" onChange={onChange} value={values.password}/><br/>
            </div>
            <input className={styles.button} type="submit" value="ENTRAR"/>
          </form>
        </div>
      </CardContent>
    </Card>
</div>
  );
}