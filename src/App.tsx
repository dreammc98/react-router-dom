import React, { useState } from "react";
import styles from "./components/Site.module.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Adidas } from "./components/pages/Adidas";
import { Puma } from "./components/pages/Puma";
import { Abibas } from "./components/pages/Abibas";
import { Error404 } from "./components/pages/Error404";
import { NavLink } from "react-router-dom";
import { DescriptionOfSnickers } from "./components/DescriptionOfSnickers";
import { Prices } from "./components/pages/Prices";
import { PATH } from "./routes/router";

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <NavLink
            to={PATH.ADIDAS}
            className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
          >
            Adidas
          </NavLink>
          <NavLink
            to={PATH.PUMA}
            className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
          >
            Puma
          </NavLink>
          <NavLink
            to={PATH.ABIBAS}
            className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
          >
            Abibas
          </NavLink>
          <NavLink
            to={PATH.PRICE}
            className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
          >
            Price
          </NavLink>
          <NavLink
            to={PATH.PROTECTED}
            className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
          >
            Protected
          </NavLink>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
