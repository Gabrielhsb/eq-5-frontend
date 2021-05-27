import styles from './styles.module.scss';
import imageOne from '../../images/ilustration-somos.png';
import imageTwo from '../../images/ilustration-ideas.png';
import imageThree from '../../images/ilustration-objetivo.png';
import {Footer} from '../../components/footer/index.js';
export default function About() {
  return(
    <div className={styles.containerBoddy}>
      <div className={styles.containerOne}>
        <div className={styles.textOne}>
          <h1>Quem <span className={styles.purpleText}>somos</span> e <br/>
        o que fazemos</h1>
        <span>Nossa plataforma foi criada para dar visibilidade às pessoas do espectro e seus talentos. </span> <br/>  <br/> 
        <span>Buscamos derrubar as barreiras do preconceito e do capacitismo para que clientes e recrutadores enxerguem o potencial dos profissionais e os contrate! </span>
        </div>
        <div className={styles.imageOne} alt="ilustração">
        <img src={imageOne} alt="ilustração"/>
        </div>
      </div>


      <div className={styles.containerTwo}>
        <div className={styles.imageTwo}>
          <img src={imageTwo} alt="ilustração"/>
          </div>
        <div className={styles.textTwo}>
          <h1>Nosso nascimento</h1>
        <span>Surgimos depois de um “toró de ideias” sobre diversidade, também descobrimos que mais de 80% das pessoas com autismo não estão no mercado de trabalho. A partir daí, aceitamos o desafio de mudar essa realidade. Você vem com a gente?
</span> <br/>  <br/> 
        </div>
      </div>


      <div className={styles.containerThree}>
        <div className={styles.textThree}>
          <h1>Nosso objetivo</h1>
        <span>O fato é que o mundo está mudando e nós precisamos acompanhá-lo. A diversidade, igualdade e inclusão passaram a ser mais do que pautas, são exigências. </span> <br/>  <br/> 
        <span>E nós da Recone acreditamos que excelentes profissionais neurodiversos são invisibilizados, por isso, decidimos dar luz e espaço para eles mostrarem seus talentos e serem reconhecidos por eles!
</span>
        </div>
        <div className={styles.imageThree}>
        <img src={imageThree} alt="ilustração"/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}