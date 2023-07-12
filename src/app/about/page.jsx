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
            Hello 👋, I am <b>Harsh Shah</b>. <br/> <br/>
            A passionate Frontend developer from India studying Computer Engineering at PDEU, Gandhinagar & member of ACM PDEU Student Chapter. I am a driven and motivated developer with a passion for solving complex problems & creating elegant and efficient solutions. When I was introduced to programming, I built a basic billing system. This fueled up my passion for building new things and using code to solve daily problems.
            <br/><br/>
            I am exploring my varied interests and challenging myself to do things. Presently, I have a good knowledge of Web Development, Java and Data Structures. I am trying my hands on Machine Learning.
            <br/><br/>
            My Hobbies includes playing chess, reading, and exploring new technologies. I am dedicated to stay up-to-date with the latest industry trends and always seek new challenges to expand my skillset.
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
