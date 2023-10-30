import Button from "@/components/button/button";
import React from "react";
import styles from "./category.module.css";
import freshFruits from "../../../../public/fresh Fruts.jpg";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.Title}> {params.category}</h1>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.textTitle}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            <br />
            repellat iure minus eos incidunt enim fuga nemo atque perspiciatis
            quaerat.
          </p>
          <Button text="see more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={freshFruits}
            alt="freshFruits"
          />
        </div>
      </div>
      {/* second div */}
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.textTitle}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            <br />
            repellat iure minus eos incidunt enim fuga nemo atque perspiciatis
            quaerat.
          </p>
          <Button text="see more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={freshFruits}
            alt="freshFruits"
          />
        </div>
      </div>
      {/* third div */}
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1 className={styles.textTitle}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            <br />
            repellat iure minus eos incidunt enim fuga nemo atque perspiciatis
            quaerat.
          </p>
          <Button text="see more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={freshFruits}
            alt="freshFruits"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
