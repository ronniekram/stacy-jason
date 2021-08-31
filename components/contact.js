import Image from "next/image";
import styles from "../styles/contact.module.scss";
import contact from "../assets/svg/contact-text.svg";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.heading}>
        <Image src={contact} alt="SVG of the word Contact" />
      </div>

      <div className={styles.numbers}>
        <div>
          Stacy Geisler
          <p>(863) 267-4089</p>
        </div>

        <div>
          Jason Boniface
          <p>(781) 715-5576</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
