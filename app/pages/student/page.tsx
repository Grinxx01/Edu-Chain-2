import React from "react";
import styles from "../../styles.module.css";
import Link from "next/link";
import Header from "@/app/components/header";

const Student = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainStudent}>
                <div className={styles.studentImg}>
                    <img src="" alt="" />
                </div>
                <div className={styles.studentName}>
                    <h2>Student Name</h2>
                </div>
                <div className={styles.course}>
                    <div className={styles.courseList}>
                        <h3>Course List</h3>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Student;