import React from "react";
import styles from "./portfolio.module.css";
import Link from "next/link";

const portfolioPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>choose a gallery</h1>
      <div className={styles.Items}>
        <Link href="/portfolio/illustration" className={styles.Item}>
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link href="/portfolio/website" className={styles.Item}>
          <span className={styles.title}>Website</span>
        </Link>
        <Link href="/portfolio/application" className={styles.Item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default portfolioPage;
