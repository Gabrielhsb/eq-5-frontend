import { Card } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
   width: 400,
   height: 483,
   display: 'flex',
   justifyContent: 'center',
   fontFamily: 'Nunito' ,
   alignItems: 'center',
   textAlign: 'center'

   
  },
  title: {
    fontSize: 35,
    color: '#6866CC',
    fontFamily: 'Nunito' ,
    fontWeight: 400,
    
  },
  input: {
    border: '2px solid #6866CC',
    boxShadow: '0px 4px 25px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    width: 250,
    height: 35,
  
  },
  form: {
    paddingTop: 10,
  },
  button: {
    background: '#6866CC',
    color: '#fff',
    width: 120,
    height: 43,
    borderRadius: 40,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
    border: 0,
    marginTop: 50,
    alignItems: 'center',
  },
  divLabel: {
    textAlign: 'left',
    marginTop: 24,
  }

});

export function LoginCard () {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.root} >
      <CardContent>
        <div >
          <h1 className={classes.title}>Fazer Login</h1>
          <p>Acesse a sua conta</p>
          <form className={classes.form}>
            <div className={classes.divLabel}>
              <label >Email</label><br/>
              <input className={classes.input}  type="email" id="email" /><br/>
            </div>
            <div className={classes.divLabel}>
              <label >Senha</label><br/>
              <input className={classes.input}  type="password" id="password"/><br/>
            </div>
            
            <input className={classes.button} type="submit" value="ENTRAR"/>
          </form>
        </div>
      </CardContent>
    </Card>
</div>
  );
}