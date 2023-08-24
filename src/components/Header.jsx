import styles from "./Header.module.css";

import igniteLogo from "../assets/Ignite_logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="LogoIgnite"></img>
    </header>
  );
}