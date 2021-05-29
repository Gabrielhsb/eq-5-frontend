import styles from "./styles.module.scss";
import fail from "../../images/fail.png";

export default function NotFound(){
    return(
        <div>
            <img src={fail} alt="Não encontrado"/>
        </div>
    )
}