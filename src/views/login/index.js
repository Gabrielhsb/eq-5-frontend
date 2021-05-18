import {LoginCard} from '../../components/login-card';
import Grid from '@material-ui/core/Grid';
export default function Login() {
  return (
    <div >
      <Grid container spacing={1}>
      <Grid item xs>
          <LoginCard/>
        </Grid>
      </Grid>
      
    </div>
  )
}