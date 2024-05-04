/* eslint-disable jsx-a11y/alt-text */
import styles from "./Column.module.css";
import clock from "../../assets/images/clock.gif";



export default function Column(props) {
    const imagetype=props.content;

    return (
        <>
            <div className={`${styles.column} ${"column1"}`}>
                <img style={{width:"40%"}}
                    className={styles.left}
                    src={imagetype[0]}
                    
                />
                <img
                    className={styles.right}
                    src={imagetype[1]}
                
                />
                <img
                    style={{width:"80%"}}
                    className={styles.left}
                    src={imagetype[2]}
                    
                />
                <img
                    className={styles.right}
                    src={imagetype[3]}
                    
                />
                <img
                    className={styles.right}
                    src={imagetype[4]}
                    
                />
            </div>
        </>
    );
}
