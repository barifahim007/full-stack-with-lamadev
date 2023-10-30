import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className={styles.MainContainer}>
      <Link href="/blog/testid" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={320}
            height={200}
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>values of lonliness</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quod sapiente facilis <br /> illo tempore dolores
            nulla cupiditate est reprehenderit, sequi laborum hic veritatis vel
            porro repellendus autem, magnam odit perferendis.
          </p>
        </div>
      </Link>
      {/* second link */}
      <Link href="/blog/testid" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={320}
            height={200}
            src="https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>beauty of wild</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quod sapiente facilis <br /> illo tempore dolores
            nulla cupiditate est reprehenderit, sequi laborum hic veritatis vel
            porro repellendus autem, magnam odit perferendis.
          </p>
        </div>
      </Link>
      {/* third link */}
      <Link href="/blog/testid" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={320}
            height={200}
            src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>positive think</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quod sapiente facilis <br /> illo tempore dolores
            nulla cupiditate est reprehenderit, sequi laborum hic veritatis vel
            porro repellendus autem, magnam odit perferendis.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPage;
