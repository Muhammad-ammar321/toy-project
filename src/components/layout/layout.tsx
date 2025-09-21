import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
