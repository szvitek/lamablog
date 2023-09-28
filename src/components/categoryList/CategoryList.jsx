import Link from 'next/link';
import styles from './categoryList.module.css';
import Image from 'next/image';

const categories = [
  { name: 'style', bg: '#57c4ff31' },
  { name: 'fashion', bg: '#da85c731' },
  { name: 'food', bg: '#7fb88133' },
  { name: 'travel', bg: '#ff795736' },
  { name: 'culture', bg: '#ffb04f45' },
  { name: 'coding', bg: '#5e4fff31' },
];

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            href={`/blog?cat=${category}`}
            className={styles.category}
            key={category.name}
            style={{ backgroundColor: category.bg }}
          >
            <Image
              src={`/${category.name}.png`}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CategoryList;
