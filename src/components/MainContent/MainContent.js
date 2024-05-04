import styles from "./MainContent.module.css";
import Column from "../Column/Column"
export default function MainContent(){

    return(
        <div className={styles.body}>
            <Column/>
        </div>
    )
}