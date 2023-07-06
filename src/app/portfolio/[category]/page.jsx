import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/context/ThemeContext";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <div className={styles.tech}>
              {item.tech.map((tag) => (
                <button className={styles.tag} key={tag}>
                  {tag}
                </button>
              ))}
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.btn}>
                <Button text="Live Site" url={item.site} />
              </div>
              <div className={styles.btn}>
                <Button text="Source Code" url={item.code} />
              </div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.images[0]}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
