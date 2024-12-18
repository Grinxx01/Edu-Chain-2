"use client";

import React from "react";
import styles from "../styles.module.css";
import Link from "next/link";
import LoginButton from "../components/loginbutton";

const callAuthApi = async (action: string, params?: any) => {
  const response = await fetch("/api/auth/" + action, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, params }),
  });
  return response.json();
};

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
		<LoginButton/>		
        </div>
      </div>
    </header>
  );
};

export default Header;
