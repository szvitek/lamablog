import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = ({key, post}) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>{post.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          similique, ea esse dignissimos ratione cum tenetur reprehenderit quae
          nesciunt perspiciatis iste sequi optio cumque, saepe adipisci, veniam
          ab ad eius!
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
