import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Made with ❤️ by Harsh</div>
      <div className={styles.social}>
        <Image
          src="/5.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Harsh Shah LinkedIn Account"
          href="https://www.linkedin.com/in/harsh-shah-624/"
        />
        <Image
          src="/9.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Harsh Shah LinkedIn Account"
        />
        <Image
          src="/7.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Harsh Shah LinkedIn Account"
        />
      </div>
    </div>
  );
};

export default Footer;
