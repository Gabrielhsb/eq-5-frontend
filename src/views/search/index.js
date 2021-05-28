import styles from './styles.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Footer } from '../../components/footer';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import React, { useState, useEffect, useContext} from 'react';
import Item from '../../components/item/index';
import search from '../../images/icons/search.png';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../components/store/context';


const list = [
  { name: 'Todos' },
  { name: 'Tecnologia' },
  { name: 'Serviços Gerais' },
  { name: 'Educação' },
  { name: 'Culinária' },
  { name: 'Artesanato' },
  { name: 'Beleza' },
  { name: 'Design' },
  { name: 'item9' }
];


export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <Item title={name} key={name} selected={selected} />;
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


export default function Search() {
  const { setPerfil } = useContext(StoreContext);
  const [selected, setSelected] = useState('');
  const [occupation, setOccupation] = useState('');
  const menuItems = Menu(list, selected);
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const todos = 'Todos';
  const history = useHistory();


 


  function onChange(event) {
    const { value } = event.target;
    setOccupation(value);
  }

  function searchOccupation(event) {
    event.preventDefault();

    searchInput(occupation);
  }


  async function searchInput(occupation) {
 
    const params = new URLSearchParams([['occupation', occupation]])
    api.get("/user", { params })
      .then((res) => (setFilterUsers(res.data)))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  function onSelect(key) {

    if (key === "Todos") {
      setFilterUsers(users);
    } else {
      setFilterUsers(users.filter(function (obj) { return obj.categorie === key; }));
    }
  }
  const menu = menuItems;

  useEffect(() => {
    api.get("/user")
      .then((res) => (setUsers(res.data)))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  },[])

  return (
    <div className={styles.searchContainer}>
      <div className={styles.textArea}>
        <div className={styles.titleFull}>
          <h1 className={styles.title}>Contrate uma pessoa </h1>
          <h1 className={styles.textColor}>neurodiversa</h1>
        </div>
        <span>Profissionais
            neurodiversos são tão capazes quanto os neurotípicos!</span>
        <form className={styles.searchForm} onSubmit={searchOccupation}>
          <input className={styles.searchBar} name="occupation" value={occupation} onChange={onChange} placeholder="Busque por uma profissão"></input>
          <button type="submit"><img src={search} alt="lupa" /></button>
        </form>

      </div>
      <div className={styles.works}>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={onSelect}
        />
      </div>

      <div className={styles.cards} >
        
        {filterUsers ? filterUsers.map((people, index) =>
          <Card className={styles.rootCard}  onClick={() => {
            setPerfil({id: people.id});
            history.push({
              pathname: '/perfil'
            });
          }}>
            <CardContent className={styles.cardContent} >
              <img src={people.avatar} alt="avatar" />
              <div className={styles.CardText}>
                <h1>{people.name}</h1>
                <h3>{people.occupation}</h3>
                <h3>{people.city}, {people.state}</h3>
              </div>
            </CardContent>
          </Card>
        )
          : users.map((people, index) =>
            <Card className={styles.rootCard} onClick={() => {
              setPerfil({id: people.id});
              history.push({
                pathname: '/perfil'
              });
            }}>
              <CardContent className={styles.cardContent} >
                <img src={people.avatar} alt="avatar" />
                <div className={styles.CardText}>
                  <h1>{people.name}</h1>
                  <h3>{people.occupation}</h3>
                  <h3>{people.city}, {people.state}</h3>
                </div>
              </CardContent>
            </Card>
          )
        }
      </div>
      <Footer />
    </div>
  )
}

