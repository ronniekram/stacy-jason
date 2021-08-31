import Image from "next/image";
import styles from "../styles/contact.module.scss";
import contact from "../assets/svg/contact-text.svg";

// <a href="tel:781-715-5576">(781) 715-5576</a>
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.heading}>
        <Image src={contact} alt="SVG of the word Contact" />
      </div>

      <div className={styles.numbers}>
        <div>
          Stacy Geisler
          <p><a href="tel:863-267-4089">(863) 267-4089</a></p>
        </div>

        <div>
          Jason Boniface
          <p><a href="tel:781-715-5576">(781) 715-5576</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
