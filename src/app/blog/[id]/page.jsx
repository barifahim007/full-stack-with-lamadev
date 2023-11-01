import React from "react";
import styles from "./dynamic.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const dynamicBlog = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.main}>
      <div className={styles.headContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.headTitle}>{data.title}</h1>
          <p className={styles.heading}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, sit
            <br />
            consequuntur! Voluptatem necessitatibus, sint in quaerat vero magnam
            officiis minus.
          </p>
          <div className={styles.author}>
            <Image
              className={styles.pic}
              width={60}
              height={50}
              src="https://images.unsplash.com/photo-1617720197345-5e5235ec6220?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p className={styles.name}> Author: jon doe</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            width={420}
            height={300}
            src="https://images.unsplash.com/photo-1492681290082-e932832941e6?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className={styles.desContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nam
          minima expedita at aliquam recusandae, doloremque beatae labore
          molestiae vero alias voluptas, unde nemo itaque laborum? Adipisci
          reprehenderit, nemo magnam quisquam ipsam architecto quos sunt dolorem
          quaerat numquam, obcaecati porro cum rerum dolores aliquam cumque vero
          excepturi nam nobis corporis, optio earum debitis sint voluptatibus.
          Voluptates nemo tempora ab quae eaque magnam. Illo ratione asperiores
          fuga consequuntur aspernatur consectetur? Itaque. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Exercitationem asperiores qui
          reiciendis voluptatum. Magnam culpa veritatis neque quod aliquam
          under. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          beatae. Numquam laborum unde id debitis deserunt sint, magnam, quas
          eaque aspernatur, pariatur asperiores itaque perspiciatis eligendi
          necessitatibus at earum eveniet rerum hic ipsam. Aut laboriosam ut qui
          harum, aperiam aliquam.
        </p>
      </div>
    </div>
  );
};

export default dynamicBlog;
