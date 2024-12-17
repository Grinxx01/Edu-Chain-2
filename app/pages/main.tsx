import React from "react";
import Styles from "../styles.module.css"
import Link from "next/link";

const Main = () => {
    return (
        <main className={Styles.main}>
            <div className={Styles.heroText}>
                <h1>
                    Digital Education,<br/>
                    Real Transformation                    
                </h1>
                <p>
                    Digital education opens doors to real opportunities.
                    <br/>Our platform is designed to empower you with
                    <br />cutting-edge skills
                </p>
                <div className={Styles.start}>
                    <Link href="/auth/login">Start Now</Link>
                </div>
            </div>
            <div className={Styles.heroImg}>
                <img src="/heroImg.PNG" alt="hero"/>
            </div>
        </main>
    );
}

export default Main