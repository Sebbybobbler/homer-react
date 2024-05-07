import styles from "./MainContent.module.css";
import Column from "../Column/Column";
import clock from "../../assets/images/clock.gif";

const images = {
    empty: " ",
    clock: clock,
    worms: "https://images.squarespace-cdn.com/content/v1/581499b8e58c627afce6221c/1581506894615-92DOP8D8ZXT93BMQFUL4/worm-boyz.gif?format=1000w",
    toaster: "https://coolgifs.neocities.org/gifs/93.gif",
    bells: "https://media.tenor.com/pJCgr-KvGW8AAAAj/bells-wedding-bells.gif",
    mouth: "https://media.baamboozle.com/uploads/images/627098/1644409034_191338_gif-url.gif",
    jesus: "https://i.pinimg.com/originals/c9/9c/98/c99c98936a66370a09589509ca274001.gif",
};

export default function MainContent(props) {



    return (
        <>
            <div className={`${styles.body} ${styles.column}`}>
                <Column
                    content={[
                        images["clock"],
                        images["worms"],
                        images["toaster"],
                        images["bells"],
                    ]}
                />
            </div>
            <div className={`${styles.body} ${styles.column}`}>
                <Column
                    content={[
                        images["toaster"],
                        images["mouth"],
                        images["clock"],
                        images["worms"],
                    ]}
                />
            </div>
            <div className={`${styles.body} ${styles.column}`}>
                <Column
                    style={{ height: "150%", width: "65%" }}
                    content={[
                        images["empty"],
                        images["jesus"],
                        images["empty"],
                    ]}
                />
            </div>
            <div className={`${styles.body} ${styles.column}`}>
                <Column
                    content={[
                        images["worms"],
                        images["bells"],
                        images["toaster"],
                    ]}
                />
            </div>
            <div className={`${styles.body} ${styles.column}`}>
                <Column
                    content={[
                        images["toaster"],
                        images["mouth"],
                        images["clock"],
                    ]}
                />
            </div>
        </>
    );
}
