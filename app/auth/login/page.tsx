import React from "react";
import styles from "../../styles.module.css";
import Link from "next/link";

const Login = () => {
    return (
        <div className={styles.authContainer}>
            <form className={styles.form}>
                <h1>Login</h1>
                <div className={styles.inputField}>
                    <input id="email" name="email" type="text" placeholder="E-Mail" />
                </div>
                <div className={styles.inputField}>
                    <input id="password" name="password" type="password" placeholder="Password" />
                </div>
                <div className={styles.button}>
                    <button type="submit">Login</button>
                </div>
            </form>
            <p className={styles.footerAuth}>
                Don't have an account yet? <Link href="/auth/signup">SignUp</Link>
            </p>
        </div>
    );
};

export default Login;
