import { NavLink } from "react-router";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>My Projects</div>
      <div className={styles.links}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : "")}>
          Home
        </NavLink>
        <NavLink to="/todolist" className={({ isActive }) => (isActive ? styles.active : "")}>
          Todo
        </NavLink>
        <NavLink to="/quiz" className={({ isActive }) => (isActive ? styles.active : "")}>
          Quiz
        </NavLink>
        <NavLink to="/stepper" className={({ isActive }) => (isActive ? styles.active : "")}>
          Stepper
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
