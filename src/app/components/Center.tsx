import React from "react";
import styles from "./styles.module.css";

type CenterProps = {
  children: React.ReactNode;
};

const Center = ({ children }: CenterProps) => {
  return <div className={styles.center}>{children}</div>;
};

export default Center;
