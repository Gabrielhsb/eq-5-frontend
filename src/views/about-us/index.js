import styles from './styles.module.scss';
import imageOne from '../../images/ilustration-somos.png';
import imageTwo from '../../images/ilustration-ideas.png';
import imageThree from '../../images/ilustration-objetivo.png';
import { Footer } from '../../components/footer/index.js';
import Slider from 'infinite-react-carousel';
import flavia from '../../images/flavia-coelho.png';
import Rafaela from '../../images/rafaela-araujo.png';
import as from '../../images/as.png';
import as2 from '../../images/as2.png';
import './carousel.css';



export default function About() {
  return (
    <div className={styles.containerBoddy}>
      <div className={styles.containerOne}>
        <div className={styles.textOne}>
          <h1>Quem <span className={styles.purpleText}>somos</span> e <br />
        o que fazemos</h1>
          <span>Nossa plataforma foi criada para dar visibilidade às pessoas do espectro e seus talentos. </span> <br />  <br />
          <span>Buscamos derrubar as barreiras do preconceito e do capacitismo para que clientes e recrutadores enxerguem o potencial dos profissionais e os contrate! </span>
        </div>
        <div className={styles.imageOne} alt="ilustração">
          <img src={imageOne} alt="ilustração" />
        </div>
      </div>


      <div className={styles.containerTwo}>
        <div className={styles.imageTwo}>
          <img src={imageTwo} alt="ilustração" />
        </div>
        <div className={styles.textTwo}>
          <h1>Nosso nascimento</h1>
          <span>Surgimos depois de um “toró de ideias” sobre diversidade, também descobrimos que mais de 80% das pessoas com autismo não estão no mercado de trabalho. A partir daí, aceitamos o desafio de mudar essa realidade. Você vem com a gente?
</span> <br />  <br />
        </div>
      </div>


      <div className={styles.containerThree}>
        <div className={styles.textThree}>
          <h1>Nosso objetivo</h1>
          <span>O fato é que o mundo está mudando e nós precisamos acompanhá-lo. A diversidade, igualdade e inclusão passaram a ser mais do que pautas, são exigências. </span> <br />  <br />
          <span>E nós da Recone acreditamos que excelentes profissionais neurodiversos são invisibilizados, por isso, decidimos dar luz e espaço para eles mostrarem seus talentos e serem reconhecidos por eles!
</span>
        </div>
        <div className={styles.imageThree}>
          <img src={imageThree} alt="ilustração" />
        </div>


      </div>
      <div className={styles.partners}>
        <h1>Nossas <span>parcerias</span></h1>

      </div>


    <div className={styles.partnersTwo} >
      <Slider dots>
        <div className={styles.slideOne}>
          <div className={styles.slider}>
            <div className={styles.image}>
              <img src={flavia} alt="foto de perfil" />
              <h3>@autistaemulher</h3>
            </div>
            <div className={styles.text}>

              <span>
                <img className={styles.as} src={as} alt="aspas" /><br />
        Acredito que o App ajudará e pode inspirar outros<br />
        autistas a não terem medo e sentir de que são sim muito <br />
        capazes. Poderá dar opções as empresas para conhecer <br />
         os grandes talentos disponíveis no meio autista e <br />
         demais deficiências.<br />
                <img className={styles.as2} src={as2} alt="aspas" />
              </span>
              <h3>
                Flávia Coelho
        </h3>
              <h4>Autista, TDAH, SD e Matemática</h4>
            </div>
          </div>
        </div>
        <div className={styles.slideTwo}>
        <div className={styles.slider}>
            <div className={styles.image}>
              <img src={Rafaela} alt="foto de perfil" />
              <h3>@a_professora_neurodiversa</h3>
            </div>
            <div className={styles.text}>

              <span>
                <img className={styles.as} src={as} alt="aspas" /><br />
                Recone é um aplicativo que conecta grandes talentos<br/> 
                a grandes empresas. Se você está a procura de um <br/>
                profissional qualificado, com habilidades e competências <br/>
                aqui é o lugar. Quem contrata serviços de um neurodiverso <br/>
                só tem a ganhar com as suas excepcionalidades o Recone<br/>
                 está aqui para ajudar nesse encontro. Eu recomendo.<br/>
                <img className={styles.as2} src={as2} alt="aspas" />
              </span>
              <h3>Rafaela Araújo</h3>
              <h4>Autista e Professora</h4>
            </div>
          </div>
        </div>
      </Slider>
      </div>
      <Footer />
    </div>
  )
}