import styles from './styles.module.scss';
import people from '../../images/perfil.png';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import iconPin from '../../images/icons/pin.png';
import iconTel from '../../images/icons/tel.png';
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
  }
});







export default function MyPerfil() {
  const classes = useStyles();
  const { user } = useContext(StoreContext);
  const [userFull, setUserFull] = useState([]);

  

  useEffect(() => {
    api.get(`/user/${user.id}`)
      .then((res) => (setUserFull(res.data)))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [])

  

  var achievements = userFull.achievements?.map((ach, index) =>
  <div className={styles.achievementsCards}>
    <img src={achievementsIcon} alt="icone de conquista" />
    <div>
      <h5>{ach.description}</h5>
      <span>{ach.date}</span>
    </div>
  </div>
)

var gallery = userFull.imageGallery?.map((img, index) =>
    
        <img src={img}/>
   
   
)


  return (

    <div className={styles.perfilContainer}>
      <div className={styles.banner}>
      </div>
      <div className={styles.content}>
        <img className={styles.perfilAvatar} src={userFull.avatar} alt="foto de perfil" />
        <h1>{userFull.name}</h1>
        <h2>{userFull.categorie}</h2>
        <div className={styles.info}>
          <img className={styles.iconImg} src={iconPin} alt="" />
          <h5> {userFull.city}, {userFull.state}</h5>
          <img className={styles.iconImg} src={iconTel} alt="" />
          <h5>  (79) 32820-4281</h5>
        </div>
        <IconButton className={classes.buttonPerfil} onClick={userFull.links?.url}>{userFull.links?.name}<LinkIcon /></IconButton>
      </div>
      <hr />

      <div className={styles.aboutCard}>
        <div className={styles.about}>
          <h2>Sobre Mim</h2>
          <h4>{user.occupation}</h4>
          <h4>62 anos</h4>
          <span>{user.about}</span>
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