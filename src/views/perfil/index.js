import styles from './styles.module.scss';
import people from '../../images/perfil.png';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import iconPin from '../../images/icons/pin.png';
import iconTel from '../../images/icons/tel.png';
import linkIcon from '../../images/icons/link-icon.png';
import achievementsIcon from '../../images/achievementsIcon.png';
import image from '../../images/ana-image1.jpg';
import { Footer } from '../../components/footer';
import { useLocation } from 'react-router-dom';
import StoreContext from '../../components/store/context';
import { useState, useContext } from 'react';
import api from '../../services/api';


const useStyles = makeStyles({
  buttonPerfil: {
    fontFamily: 'Nunito',
    background: '#6866CC',
    color: '#fff',
    width: 200,
    height: 64,
    borderRadius: 40,
    boxShadow: ' 0 4 16 rgba(0; 0; 0; 0.08)',
    border: 0,
    marginTop: 50,
    cursor: 'pointer',
    fontSize: 17,
    marginBottom: 60,

  },
  


});

export default function MyPerfil() {
  const classes = useStyles();

  const { perfil, setPerfil  } = useContext(StoreContext);

  

  useEffect(() => {
    api.get(`/user/${perfil.id}`)
      .then((res) => (setPerfil(res.data)))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [])

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      window.location.assign(perfil.links[0].url);
    }
  });
console.log(perfil)
  var achievements = perfil.achievements?.map((ach, index) =>
  <div className={styles.achievementsCards}>
    <img src={achievementsIcon} alt="icone de conquista" />
    <div>
      <h5>{ach.description}</h5>
      <span>{ach.date}</span>
    </div>
  </div>
)

var gallery = perfil.imageGallery?.map((img, index) =>
    
        <img src={img}/>
   
   
)

const style = {
  backgroundImage: `url(${perfil.avatar})`,
}

  return (

    <div className={styles.perfilContainer}>
      <div className={styles.banner}>
      </div>
      <div className={styles.content}>
        <div className={styles.perfilAvatar} >
          <div style={style} alt="foto de perfil" >
            </div>
        </div>
       
        <h1>{perfil.name}</h1>
        <h2>{perfil.categorie}</h2>
        <div className={styles.info}>
          <img className={styles.iconImg} src={iconPin} alt="" />
          <h5> {perfil.city}, {perfil.state}</h5>
          <img className={styles.iconImg} src={iconTel} alt="" />
          <h5>  (79) 32820-4281</h5>
        </div>
        <Button className={classes.buttonPerfil} endIcon={<LinkIcon/>} onClick={() => setClicked(true)} >{perfil.links[0].name} </Button>
      </div>
      <hr />

      <div className={styles.aboutCard}>
        <div className={styles.about}>
          <h2>Sobre Mim</h2>
          <h4>{perfil.occupation}</h4>
          <h4>62 anos</h4>
          <span>{perfil.description}</span>
        </div>
        <div className={styles.achievements}>
          <h2>Conquistas</h2>
          <div >
            {achievements}
          </div>
        </div>
      </div>

      <div className={styles.gallery}>
        <h2>Galeria</h2>
        <div className={styles.galleryCard}>
          {gallery}
        </div>
      </div>
      <Footer />
    </div>

  )
}