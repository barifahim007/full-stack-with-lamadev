import Image from "next/image";
import React from "react";
import styles from "./contact.module.css";
import Button from "@/components/button/button";

const contactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let`s keep in Touch.</h1>
      <div className={styles.content}>
        <div className={styles.ImgContainer}>
          <Image
            fill="true"
            src="/contact.png"
            alt="contact img"
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            id=""
            cols="30"
            rows="10"
            className={styles.textarea}
          />
          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  );
};

export default contactPage;
