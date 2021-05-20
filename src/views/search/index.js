import styles from './styles.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import people from '../../images/perfil.png';
import { Footer } from '../../components/footer';
var  peopleTest = {
  img: people,
  name: 'Ana Beatriz Silva',
  work: 'Desenvolvedor',
  city: 'Lavras - MG'
}

var arrayTest = [peopleTest,peopleTest,peopleTest,
  peopleTest,peopleTest,peopleTest,peopleTest];

var cards = arrayTest.map((people, index) => 
      <Card  className={styles.rootCard}>
        <CardContent className={styles.cardContent}>
            <img src={people.img}/>
            <div className={styles.CardText}>
              <h1>{people.name}</h1>
              <h3>{people.work}</h3>
              <h3>{people.city}</h3>
            </div>

        </CardContent>
      </Card>
)
export default function Search() {
  return(

    <div className={styles.searchContainer}>
      <div className={styles.textArea}>
          <div className={styles.titleFull}>
            <h1 className={styles.title}>Contrate uma pessoa </h1>
            <h1 className={styles.textColor}>neurodiversa</h1>
          </div>
            <span>Profissionais 
            neurodiversos são tão capazes quanto os neurotípicos!</span>
            <input className={styles.searchBar} placeholder="Busque por uma profissão"></input>
      </div>
      <div className={styles.works}>

      </div>
      
      <div className={styles.cards}>
        {cards}
      </div>
      <Footer/>
    </div>

  )
}