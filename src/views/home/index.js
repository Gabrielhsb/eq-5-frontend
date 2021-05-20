import styles from './styles.module.scss';
import ilustration from '../../images/ilustration.png';
import ilustration2 from '../../images/home_ilustration.png';
import perfil from '../../images/perfil.png';
import { Card } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Footer } from '../../components/footer';
export default function Home() {
 
  return (
    <div>
      <div className={styles.homeContainer}>
        <div className={styles.welcome}>
            <h1 className={styles.titleOne}>Rede de conexão para </h1><br/>
            <img src={ilustration} alt="Ilustração de boas"/>
        </div>
        <div className={styles.text}>
          <h1 className={styles.titleTwo}>neurodiversos</h1>
          <h4>Aqui reconhecemos e integramos suas <br/>capacidades!</h4>
        </div>
      </div>

        <div className={styles.highlights}>
            <h3 className={styles.textH3}>Perfis de destaque</h3>
            <h5 className={styles.textH5}>Esses são os profissionais de destaque na nossa <br/>plataforma, seus talentos estão brilhando.</h5>

            <div className={styles.cards}>
            <Card  className={styles.root}>
              <CardContent className={styles.content}>
                  <CardMedia
                      className={styles.media}
                      image={perfil}
                      title="foto perfil"
                  />
                  <h5 className={styles.perfilName}>Ana Beatriz Silva</h5>
                  <h6 className={styles.work}>Desenvolvedora Backend</h6>
                  <button className={styles.button}>Tecnologia</button>
              </CardContent>
            </Card>
            <Card  className={styles.root}>
              <CardContent className={styles.content}>
                  <CardMedia
                      className={styles.media}
                      image={perfil}
                      title="foto perfil"
                  />
                  <h5 className={styles.perfilName}>Ana Beatriz Silva</h5>
                  <h6 className={styles.work}>Desenvolvedora Backend</h6>
                  <button className={styles.button}>Tecnologia</button>
              </CardContent>
            </Card>
            <Card  className={styles.root}>
              <CardContent className={styles.content}>
                  <CardMedia
                      className={styles.media}
                      image={perfil}
                      title="foto perfil"
                  />
                  <h5 className={styles.perfilName}>Ana Beatriz Silva</h5>
                  <h6 className={styles.work}>Desenvolvedora Backend</h6>
                  <button className={styles.button}>Tecnologia</button>
              </CardContent>
            </Card>
            </div>
        </div>

      <div className={styles.homeContainer}>
        <div className={styles.welcome}>
          <div className={styles.divTextFinal}>
          <h1 className={styles.titleThree}>Encontre o profissional <br/> perfeito para você</h1><br/>
          <span className={styles.text3}>O autismo não diminui ninguém.<br/>
Realize pesquisas por categoria e profissão e <br/> escolha os profissionais ideais!
</span> 
          <IconButton className={styles.buttonSearch}>PESQUISAR <SearchIcon /></IconButton>
          </div>
            <img src={ilustration2} alt="Ilustração de boas"/>
        </div>
        <div className={styles.text2}>
          
        </div>

    </div>
    <Footer/>
    </div>
  ) 
}