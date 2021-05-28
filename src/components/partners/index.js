import styles from './styles.module.scss';
import flavia from '../../images/flavia-coelho.png';
import as from '../../images/as.png';
import as2 from '../../images/as2.png';
export default function Partners(){

  return (
    <div className={styles.slider}>
      <div className={styles.image}>
        <img src={flavia} alt="foto de perfil"/>
        <h3>@autistaemulher</h3>
      </div>
      <div className={styles.text}>
        
        <span>
        <img className={styles.as} src={as} alt="aspas"/><br/>
        Acredito que o App ajudará e pode inspirar outros<br/>
        autistas a não terem medo e sentir de que são sim muito <br/>
        capazes. Poderá dar opções as empresas para conhecer <br/>
         os grandes talentos disponíveis no meio autista e <br/>
         demais deficiências.<br/>
         <img className={styles.as2} src={as2} alt="aspas"/>
        </span>
        <h3>
          Flávia Coelho
        </h3>
        <h4>Autista, TDAH, SD e Matemática</h4>
      </div>
    </div>

  )
}