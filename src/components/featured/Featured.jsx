import Image from 'next/image';
import styles from './featured.module.css';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque
            accusantium eveniet voluptatibus. Accusantium excepturi velit
            numquam, ex illum eius quidem laborum totam ratione temporibus.
            Consequatur dolores recusandae molestiae dolorem!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};
export default Featured;
