import styles from './styles.module.scss';
import people from '../../images/perfil.png';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import iconPin from '../../images/icons/pin.png';
import iconTel from '../../images/icons/tel.png';
import achievementsIcon from '../../images/achievementsIcon.png';
import image from '../../images/ana-image1.jpg';
import { Footer } from '../../components/footer';
const useStyles = makeStyles({
  buttonPerfil: {
    fontFamily: 'Nunito',
    background: '#6866CC',
    color: '#fff',
    width: 200,
    height: 64,
    borderRadius: 40,
    boxShadow:' 0 4 16 rgba(0; 0; 0; 0.08)',
    border: 0,
    marginTop: 50,
    cursor: 'pointer',
    marginTop:30,
    fontSize: 17,
    marginBottom: 60,
  }
});

var  peopleTest = {
  img: people,
  name: 'Ana Beatriz Silva',
  work: 'Desenvolvedor',
  city: 'Lavras - MG',
  tel: '(79) 32820-4281',
  area: 'Tecnologia',
  about: 'Em 2018, depois de me aposentar, passei a me interessar por tecnologia e desde então venho aprimorando minhas habilidades como Dev Backend. Criei um grupo de apoio para mulheres desenvolvedoras online no Whatsapp para compartilhar conhecimento e continuar evoluindo! Nunca é tarde demais para adquirir novas habilidades.',
  age: '62',
  achievements: 
    [{name: 'Trabalho Voluntário - Tech4Covid',
    date: 'Outubro de 2020'},
    {name: 'Hackathon Living Better',
    date: 'Abril de 2019'},
    {name: 'Curso Eu Progr{amo}',
    date: 'Março de 2018'}]
  
}

var galleryArray = [image,image,image,image,image,image,image,image]
var gallery = galleryArray.map((img, index) =>
    
        <img src={img}/>
   
   
)
var achievements = peopleTest.achievements.map( (ach, index) => 
    <div className={styles.achievementsCards}>
      <img src={achievementsIcon}/>
      <div> 
        <h5>{ach.name}</h5>
        <span>{ach.date}</span>
      </div>
    </div>
  )

export default function Perfil() {
  const classes = useStyles();
  return(
    
    <div className={styles.perfilContainer}>
        <div className={styles.banner}>
        </div>
        <div className={styles.content}>
            <img src={peopleTest.img}/>
            <h1>{peopleTest.name}</h1>
            <h2>{peopleTest.work}</h2>
            <div className={styles.info}>
              <img className={styles.iconImg} src={iconPin}/>
              <h5>  {peopleTest.city}</h5>
              <img className={styles.iconImg} src={iconTel}/>
              <h5>  {peopleTest.tel}</h5>
            </div>
            <IconButton className={classes.buttonPerfil}>GITHUB <LinkIcon /></IconButton>
        </div>
        <hr/>

        <div className={styles.aboutCard}>
          <div className={styles.about}>
            <h2>Sobre Mim</h2>
            <h4>{peopleTest.work}</h4>
            <h4>{peopleTest.age} anos</h4>
            <span>{peopleTest.about}</span>
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
        <Footer/>
    </div>

  )}