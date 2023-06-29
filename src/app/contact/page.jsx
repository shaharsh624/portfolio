import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Harsh Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    console.log(formData);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="Name"
            placeholder="name"
            className={styles.input}
          />
          <input
            type="text"
            name="Email"
            placeholder="email"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            placeholder="message"
            name="Message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
