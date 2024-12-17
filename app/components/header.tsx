"use client"; // Penting karena ini Client Component

import React from "react";
import styles from "../styles.module.css";
import { ConnectButton } from "thirdweb/react";
import { client } from "../lib/client";

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
            <li>Home</li>
            <li>Education</li>
            <li>Docs</li>
          </ul>
        </nav>

        <div className={styles.loginMenu}>
          <ConnectButton
            client={client}
            auth={{
              isLoggedIn: async () => {
                const res = await callAuthApi("isLoggedIn");
                return res.result;
              },
              doLogin: async (params) => {
                await callAuthApi("login", params);
              },
              getLoginPayload: async ({ address }) => {
                const res = await callAuthApi("generatePayload", { address });
                return res.payload;
              },
              doLogout: async () => {
                await callAuthApi("logout");
              },
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
