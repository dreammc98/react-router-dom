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

const PATH = {
  PAGE1: "/adidas",
  PAGE2: "/puma",
  PAGE3: "/abibas",
  PRICE: "/price",
  ERROR: "/error404",
} as const;

function App() {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <NavLink
            to={PATH.PAGE1}
            className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
          >
            Adidas
          </NavLink>
          <NavLink
            to={PATH.PAGE2}
            className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
          >
            Puma
          </NavLink>
          <NavLink
            to={PATH.PAGE3}
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
