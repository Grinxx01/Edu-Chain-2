import React from "react";
import styles from "../../styles.module.css";
import Link from "next/link";

const SignUp = () => {
    return (
        <div className={styles.authContainer}>
            <form className={styles.form}>
                <h2 className={styles.title}>Sign Up</h2>
                <div className={styles.inputField}>
                    <input id="name" name="name" type="text" placeholder="Name" required />
                </div>
                <div className={styles.inputField}>
                    <input id="email" name="email" type="email" placeholder="E-mail" required />
                </div>
                <div className={styles.inputField}>
                    <input id="password" name="password" type="password" placeholder="Password" required />
                </div>
                <div className={styles.checkboxGroup}>
                    <p>Role:</p>
                    <input
                        type="radio"
                        id="student"
                        name="role"
                        value="student"
                        required
                    />
                    <label htmlFor="student">Student</label>
                    <input
                        type="radio"
                        id="instructor"
                        name="role"
                        value="instructor"
                    />
                    <label htmlFor="instructor">Instructor</label>
                </div>
                <div className={styles.checkboxGroup}>
                    <input
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                        required
                    />
                    <label htmlFor="agreement">
                        I have read and agree to the service agreement*
                    </label>
                </div>
                <div className={styles.button}>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <p className={styles.footerAuth}>
                Already have an account? <Link href="/auth/login">Login</Link>
            </p>
        </div>
    );
};

export default SignUp;
