import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/first",
      text: "First",
    },
    {
      id: 3,
      path: "/second",
      text: "Second",
    },
    {
      id: 4,
      path: "/third",
      text: "Third",
    },
    {
      id: 5,
      path: "/fourth",
      text: "Fourth",
    },
  ];
  return (
    <nav className={styles.navbar}>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id} className={styles.underline}>
              <NavLink to={link.path} exact>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
