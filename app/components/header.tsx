import React from "react";
import styles from "../styles.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      	<div className={styles.headContainer}>
    		<div className={styles.logo}>
    	 		<h1 className={styles.title}>EduChain</h1>
  	    	</div>

        	<nav className={styles.navBar}>
        		<ul>
            		<li><Link href="/">Home</Link></li>
            		<li><Link href="/pages/education">Education</Link></li>
            		<li><Link href="/pages/docs">Docs</Link></li>
          		</ul>
        	</nav>

        	<div className={styles.loginMenu}>
          		<div className={styles.login}>
				  <Link href="/auth/login">Login</Link>
          		</div>
				<div>|</div>
          		<div className={styles.signUp}>
				  <Link href="/auth/signup">Sign Up</Link>
          		</div>
        	</div>
      	</div>
    </header>
  );
};
export default Header;
