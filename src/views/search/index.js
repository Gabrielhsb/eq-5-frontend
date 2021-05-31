import styles from "./styles.module.scss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Footer } from "../../components/footer";
import ScrollMenu from "react-horizontal-scrolling-menu";
import React, { useState, useEffect, useContext } from "react";
import Item from "../../components/item/index";
import search from "../../images/icons/search.png";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import StoreContext from "../../components/store/context";
import { makeStyles } from "@material-ui/core/styles";
import NotFound from "../../components/not-found/index";

const useStyles = makeStyles({
  rootCard: {
    cursor: "pointer",
    minWidth: "450px",
    minHeight: "220px",
    borderRadius: "20px",
    marginLeft: "9%",
    marginTop: "50px",
    display: "flex",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.1)",
    ["@media (max-width:600px)"]: {
      minWidth: "390px",
      marginLeft: "0",
    },
  },
});
const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: styles.arrowPrev });
const ArrowRight = Arrow({ text: ">", className: styles.arrowNext });

export default function Search() {
  const classes = useStyles();
  const { setIdPerfil, setPerfil } = useContext(StoreContext);
  const [selected, setSelected] = useState("");
  const [occupation, setOccupation] = useState("");
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const menuItems = list.map((element) => (
    <Item title={element} key={element} selected={selected} />
  ));

  function onChange(event) {
    const { value } = event.target;
    setOccupation(value);
  }

  function searchOccupation(event) {
    event.preventDefault();

    searchInput(occupation);
  }

  async function searchInput(occupation) {
    const params = new URLSearchParams([["occupation", occupation]]);
    api
      .get("/user", { params })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  async function onSelect(categorie) {
    if (categorie === selected) {
      setSelected("");
      api
        .get("/user")
        .then((res) => setUsers(res.data))
        .catch((err) => {
          setUsers([]);
        });
    } else {
      setSelected(categorie);
      const params = new URLSearchParams([["categorie", categorie]]);
      api
        .get("/user", { params })
        .then((res) => setUsers(res.data))
        .catch((err) => {
          setUsers([]);
        });
    }
  }
  const menu = menuItems;

  useEffect(() => {
    api
      .get("/user")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => setList(res.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    setPerfil(null);
  }, []);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.textArea}>
        <div className={styles.titleFull}>
          <h1 className={styles.title}>Contrate uma pessoa </h1>
          <h1 className={styles.textColor}>neurodiversa</h1>
        </div>
        <span>
          Profissionais neurodiversos são tão capazes quanto os neurotípicos!
        </span>
        <form className={styles.searchForm} onSubmit={searchOccupation}>
          <input
            className={styles.searchBar}
            name="occupation"
            value={occupation}
            onChange={onChange}
            placeholder="Busque por uma profissão"
          ></input>
          <button type="submit">
            <img src={search} alt="lupa" />
          </button>
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
      <div className={styles.notFound}>
        {users.length === 0 && <NotFound />}
      </div>
      <div className={styles.cards}>
        {users.map((people, index) => (
          <Card
            key={index}
            className={classes.rootCard}
            onClick={() => {
              setIdPerfil(people.id);
              history.push({
                pathname: "/perfil",
              });
            }}
          >
            <CardContent className={styles.cardContent}>
              <img src={people.avatar} alt="avatar" />
              <div className={styles.CardText}>
                <h1>{people.name}</h1>
                <h3>{people.occupation}</h3>
                <h3>
                  {people.city}, {people.state}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}
