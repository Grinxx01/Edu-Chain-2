import React from "react";
import styles from "../../styles.module.css";
import Link from "next/link";
import Header from "@/app/components/header";


const Education = () => {
    return (
        <div className={styles.eduContainer}>
        <Header/>
            <main className={styles.mainEdu}>
                <div className={styles.eduText}>
                    <h1>
                    Learn Without Limits,<br/>
                    Grow Without Boundaries.
                    </h1>
                </div>
            </main>
        </div>
    )
}

export default Education