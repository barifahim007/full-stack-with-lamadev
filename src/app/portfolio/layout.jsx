import React from "react";
import styles from "./portfolio.module.css";
import Link from "next/link";

const portfolioLayout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>
        <Link href="/portfolio">Our Works</Link>
      </h1>
      {children}
    </div>
  );
};

export default portfolioLayout;
