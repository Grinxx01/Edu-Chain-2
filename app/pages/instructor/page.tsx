import React from "react";
import styles from "../../styles.module.css";
import Link from "next/link";
import Header from "@/app/components/header";
import { redirect } from "next/navigation";
import { isLoggedIn } from "../../actions/login";

const Instructor = async () => {
    if (!(await isLoggedIn())) {
        redirect("/connect-button");
      }
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainInstructor}>
                <div className={styles.instructorImg}>
                    <img src="" alt="" />
                </div>
                <div className={styles.instructorName}>
                    <h2>Instructor Name</h2>
                </div>
                <div className={styles.course}>
                    <div className={styles.courseList}>
                        
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Instructor;
