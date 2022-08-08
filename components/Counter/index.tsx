import type { NextPage } from "next";
import { useState } from "react";
import styles from "./counter.module.css";

export const Counter: NextPage = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <h1 className={styles.mainTitle}>Pressione para começar a contar</h1>
                <button 
                    onClick={() => {setCounter(counter + 1)}}
                    className={styles.mainButton}
                >Clique aqui</button>
                <h2 className={styles.showCounter}>{counter}</h2>
            </div>
        </div>
    );
}
