import { Card } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import  background  from '../../images/signUp.png';
const useStyles = makeStyles({
  root: {
   width: 500,
   height: 604,
   display: 'flex',
   justifyContent: 'center',
   fontFamily: 'Nunito' ,
   alignItems: 'center',
   textAlign: 'center',
   background: '#E6E8FF',
   borderRadius: 20,
   backgroundImage: `url(${background})`
   
  },
  title: {
    fontSize: 35,
    color: '#000000',
    fontFamily: 'Nunito' ,
    fontWeight: 400,
    
  },
  subTitle: {
    color: '#000000',
    fontFamily: 'Nunito' ,
    fontWeight: 400,
    paddingTop: 6,
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
    background: '#039AED',
    color: '#fff',
    width: 200,
    height: 70,
    borderRadius: 40,
    fontSize: 18,
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

export function SignUpCard () {
  const classes = useStyles();
  return (
    <div>
    <Card className={classes.root} >
      <CardContent>
        <div >
          <h1 className={classes.title}>Seja bem vindo</h1>
          <h2 className={classes.subTitle}>Ainda não tem uma conta? <br/>Crie uma conta</h2>
          <button className={classes.button} >CRIAR CONTA</button>
        </div>
      </CardContent>
    </Card>
</div>
  );
}