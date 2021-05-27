import styles from './styles.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import people from '../../images/perfil.png';
import { Footer } from '../../components/footer';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import React, { Component } from 'react';
import Item from '../../components/item/index';

var  peopleTest = {
  img: people,
  name: 'Ana Beatriz Silva',
  work: 'Desenvolvedor',
  city: 'Lavras - MG'
}

var arrayTest = [peopleTest,peopleTest,peopleTest,
  peopleTest,peopleTest,peopleTest,peopleTest];


const list = [
  { id:1, name: 'Tecnologia' },
  { id:2,name: 'Serviços Gerais' },
  { id:4, name: 'Educação' },
  { id:5, name: 'Culinária' },
  { id:6, name: 'Artesanato' },
  { id:7, name: 'Beleza e Cuidados' },
  { id:8, name: 'Artes e Design' },
  { id:9, name: 'item8' },
  { id:10,name: 'item9' }
];


export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <Item title={name} key={name} selected={selected} /> ;
  });

  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };


const ArrowLeft = Arrow({ text: '<', className: styles.arrowPrev });
const ArrowRight = Arrow({ text: '>', className: styles.arrowNext });

const selected = 'Tecnologia';


var cards = arrayTest.map((people, index) => 
      <Card  className={styles.rootCard}>
        <CardContent className={styles.cardContent}>
            <img src={people.img} alt="foto de perfil"/>
            <div className={styles.CardText}>
              <h1>{people.name}</h1>
              <h3>{people.work}</h3>
              <h3>{people.city}</h3>
            </div>
        </CardContent>
      </Card>
)

class Search extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
  state = {
    selected
  };
  
  
  onSelect = key => {
    this.setState({ selected: key });
    
  }

  render(){
    
    const { selected } = this.state;
    console.log(selected)
    // Create menu from items
    const menu = this.menuItems;
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
      <ScrollMenu
        data={menu}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        selected={selected}
        onSelect={this.onSelect}
        />
      </div>
 
      <div className={styles.cards}>
        {cards}
      </div>
      <Footer/>
    </div>
  )}
}

export default Search;