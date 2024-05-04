import styles from "./Column.module.css";
import clock from "../../assets/images/clock";

export default function Column(){
    return(
        <div className={styles.column}>
            <img src={clock} alt="gif of a racing clock"/>
        </div>
    )
}