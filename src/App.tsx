import styles from "./components/Site.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { PATH } from "./routes/router";

function App() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(-1);
  };

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
          <div className={styles.HorizontalNavigation}>
            <NavLink to={PATH.ADIDAS} className={styles.LinkLikeButton}>
              Home (Adidas)
            </NavLink>
            <button
              onClick={navigateHandler}
              className={styles.LinkLikeButton}
              style={{ marginLeft: "10px", backgroundColor: "red" }}
            >
              Back
            </button>
          </div>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
