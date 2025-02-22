import styles from "./styles.module.scss";
import ilustration from "../../images/ilustration.png";
import ilustration2 from "../../images/home_ilustration.png";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { Footer } from "../../components/footer";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import StoreContext from "../../components/store/context";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  buttonSearch: {
    fontFamily: "Nunito",
    background: "#6866CC",
    color: "#fff",
    width: 200,
    height: 70,
    borderRadius: 60,
    boxShadow: " 0 4 16 rgba(0; 0; 0; 0.08)",
    border: 0,
    marginTop: 50,
    cursor: "pointer",
    fontSize: 17,
    marginBottom: 60,
    marginLeft: 35,
    "&:hover": {
      background: "#8F98FF",
    },
  },

  root: {
    width: "250px",
    height: "350px",
    marginLeft: "40px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    ["@media (max-width:600px)"]: {
      // eslint-disable-line no-useless-computed-key
      marginTop: "40px",
      marginLeft: 0,
    },
  },
});

export default function Home() {
  const [userFavorite, setUserFavorite] = useState([]);
  const { setIdPerfil } = useContext(StoreContext);
  const history = useHistory();
  useEffect(() => {
    api
      .get("/user/favorites")
      .then((res) => setUserFavorite(res.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const classes = useStyles();
  return (
    <div className={styles.homeContainer1}>
      <div className={styles.homeContainer}>
        <div className={styles.welcome}>
          <h1 className={styles.titleOne}>
            Rede de conexão para{" "}
            <h1 className={styles.titleTwo}>neurodiversos</h1>{" "}
          </h1>
          <br />
          <h4>
            Aqui reconhecemos e integramos suas <br />
            capacidades!
          </h4>
        </div>
        <div className={styles.ilustration}>
          <img src={ilustration} alt="Ilustração de boas" />
        </div>
      </div>

      <div className={styles.highlights}>
        <h3 className={styles.textH3}>Perfis de destaque</h3>
        <h5 className={styles.textH5}>
          Esses são os profissionais de destaque na nossa <br />
          plataforma, seus talentos estão brilhando.
        </h5>

        <div className={styles.cards}>
          {userFavorite.map((people, index) => (
            <Card
              className={classes.root}
              onClick={() => {
                setIdPerfil(people.id);
                history.push({
                  pathname: "/perfil",
                });
              }}
            >
              <CardContent className={styles.content}>
                <CardMedia
                  className={styles.media}
                  image={people.avatar}
                  alt="avatar"
                />
                <div className={styles.CardText}>
                  <h5 className={styles.perfilName}>{people.name}</h5>
                  <h6 className={styles.work}>{people.occupation}</h6>
                  <button className={styles.button}>{people.categorie}</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className={styles.homeSearch}>
        <div className={styles.divTextFinal}>
          <h1 className={styles.titleThree}>
            Encontre o profissional <br /> perfeito para você
          </h1>
          <br />
          <span className={styles.text3}>
            O autismo não diminui ninguém.
            <br />
            Realize pesquisas por categoria e profissão e <br /> escolha os
            profissionais ideais!
          </span>
          <Button
            className={classes.buttonSearch}
            endIcon={<SearchIcon />}
            onClick={() => {
              history.push({
                pathname: "/search",
              });
            }}
          >
            PESQUISAR
          </Button>
        </div>

        <img src={ilustration2} alt="Ilustração" />
      </div>
      <Footer />
    </div>
  );
}
