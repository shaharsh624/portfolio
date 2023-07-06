"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";

export const metadata = {
  title: "Harsh Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = {};
  //   Array.from(e.currentTarget).forEach((field) => {
  //     if (!field.name) return;
  //     formData[field.name] = field.value;
  //   });
  //   console.log(formData);
  // }
  let router = useRouter();
  function redirect() {
    if (state.succeeded) {
      router.push("/");
    }
  }
  const [state, handleSubmit] = useForm("mzblbzjo");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            priority
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            placeholder="name"
            className={styles.input}
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            className={styles.input}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            className={styles.textArea}
            placeholder="message"
            name="message"
            cols="30"
            rows="10"
            type="text"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className={styles.btn}
            type="submit"
            disabled={state.submitting}
            onClick={redirect}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
