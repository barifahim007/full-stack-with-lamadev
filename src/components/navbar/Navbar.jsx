"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const links = [
    { id: "1", href: "/", title: "Home" },
    { id: "2", href: "/portfolio", title: "portfolio" },
    { id: "3", href: "/blog", title: "blog" },
    { id: "4", href: "/about", title: "about" },
    { id: "5", href: "/contact", title: "contact" },
    { id: "6", href: "/dashboard", title: "dashboard" },
  ];
  return (
    <nav className={styles.container}>
      <Link className={styles.logo} href="/">
        FAHIM
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link className={styles.link} key={link.id} href={link.href}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
