import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "../data.js";
import { notFound } from "next/navigation";

const getData = (index) => {
  const data = items["my-work"][index];

  if (data) {
    return data;
  }

  return notFound();
};

const Work = ({ params }) => {
  const id = params.workId;
  const data = getData(id - 1);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{data.title}</h1>
      <p className={styles.desc}>{data.desc}</p>
      <div className={styles.button}>
        <Button text="Website" url={data.site} />
      </div>
      <div className={styles.button}>
        <Button text="Source Code" url={data.code} />
      </div>
      <div className={styles.item}>
        {data.images.map((item) => (
          <div className={styles.imgContainer} key={id}>
            <Image className={styles.img} fill={true} src={item} alt={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
