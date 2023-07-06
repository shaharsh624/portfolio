import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Harsh Shah</h1>
        <p className={styles.desc}>Web Developement | Machine Learning </p>
        <Button
          url="https://drive.google.com/file/d/1cm_vNtsE-axOBrM4UJ-Abmm6N4F-PRFm/view?usp=drive_link"
          text="My Resume"
        />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
