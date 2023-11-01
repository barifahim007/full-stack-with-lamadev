import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

const getdata = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const data = res.json();
  return data;
};

const BlogPage = async () => {
  const items = await getdata();

  return (
    <div className={styles.MainContainer}>
      {items.map((item) => (
        <Link
          href={`/blog/${item.id}`}
          key={item.id}
          className={styles.container}
        >
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;
