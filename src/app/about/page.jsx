import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          fill={true}
          src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award wining digital experiance
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>who are we?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            minus a quaerat eaque eos odit, quisquam sint expedita doloremque
            dicta modi odio est aperiam in quo dolorum optio deleniti.
            Necessitatibus
            <br />
            <br />
            deleniti molestiae nisi assumenda earum, nulla corrupti non
            reprehenderit consequuntur at laborum eum minima pariatur alias
            cupiditate dolorem impedit asperiores sunt rerum totam enim
            repudiandae ad mollitia? Laudantium assumenda maxime doloribus
            distinctio, ducimus deleniti id sapiente natus harum? Hic, ut!
          </p>
        </div>
        <div className={styles.item}>
          <h1>What we do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            commodi, odit blanditiis rerum ratione eos nemo? Iste ex quasi
            possimus, incidunt hic doloribus a expedita? Nostrum nulla, fugiat
            <br />
            <br />
            dolor quia modi repudiandae cumque? Perspiciatis rerum repellendus
            vel? Dicta corporis nulla magnam aperiam quos rerum quod, officiis
            delectus voluptatum, repellendus necessitatibus!
          </p>
          <Button url="/contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
