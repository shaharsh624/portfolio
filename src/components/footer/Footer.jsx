import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Made with ❤️ by Harsh</div>
      <div className={styles.social}>
        <Link href="https://www.linkedin.com/in/harshshahdev/" prefetch={true}>
          <Image
            src="/images/social/linkedin.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="Harsh Shah LinkedIn Account"
          />
        </Link>

        <Link href="https://github.com/shaharsh624" prefetch={true}>
          <Image
            src="/images/social/github.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="Harsh Shah GitHub Account"
          />
        </Link>

        <Link href="https://twitter.com/_shaharshhh" prefetch={true}>
          <Image
            src="/images/social/twitter.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="Harsh Shah Twitter Account"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
