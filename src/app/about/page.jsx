import React from "react";
import styles from "./page.module.css";
import { items } from "./data.js";

const getData = () => {
  const data = items["skills"];

  if (data) {
    return data;
  }

  return notFound();
};

const About = () => {
  const data = getData();
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.desc}>
            Hello, my name is Harsh Shah, and I am currently pursuing my
            undergraduate degree in Computer Science from Pandit Deendayal
            Energy University in India. As a frontend developer with experience
            in backend development, I specialize in creating websites for
            individuals and small businesses. <br />
            <br />
            My passion lies in the fields of machine learning and data science,
            and I am constantly seeking new opportunities to explore and deepen
            my understanding of these areas. I am also interested in Data
            Structures and Algorithms and strive to improve my programming
            skills continually.
            <br />
            <br />I am currently available for collaboration regarding projects
            related to machine learning or web development. Feel free to contact
            me.
            <br />
            <br />
            Apart from my academic pursuits, I am an avid learner and spend my
            free time learning about space and the universe.
          </p>
        </div>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.skillContainer}>
          {data.map((item) => (
            <div className={styles.itemContainer} key={item.id}>
              <img
                className={styles.img}
                src={item.img}
                alt={item.name}
                fill={true}
              />
              <h3 className={styles.imgText}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
