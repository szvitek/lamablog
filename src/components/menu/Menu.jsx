import Link from 'next/link';
import styles from './menu.module.css';
import Image from 'next/image';

const popularItems = [
  { name: 'travel', bg: '#ff7875' },
  { name: 'culture', bg: '#ffb14f' },
  { name: 'food', bg: '#7fb881' },
  { name: 'fashion', bg: '#ff7887' },
  { name: 'coding', bg: '#775aec' },
  { name: 'style', bg: '#789cff' },
];

const categoryItems = [
  { name: 'style', bg: '#57c4ff31' },
  { name: 'fashion', bg: '#da85c731' },
  { name: 'food', bg: '#7fb88133' },
  { name: 'travel', bg: '#ff795736' },
  { name: 'culture', bg: '#ffb04f45' },
  { name: 'coding', bg: '#5e4fff31' },
];

const editorItems = [
  { name: 'travel', bg: '#ff7875', image: '/p1.jpeg' },
  { name: 'culture', bg: '#ffb14f', image: '/p1.jpeg' },
  { name: 'food', bg: '#7fb881', image: '/p1.jpeg' },
  { name: 'fashion', bg: '#ff7887', image: '/p1.jpeg' },
  { name: 'coding', bg: '#775aec', image: '/p1.jpeg' },
  { name: 'style', bg: '#789cff', image: '/p1.jpeg' },
];

const MenuItem = ({ item }) => (
  <Link href="/" className={styles.item}>
    {item.image && (
      <div className={styles.imageContainer}>
        <Image src={item.image} alt="" fill className={styles.image} />
      </div>
    )}
    <div className={styles.textContainer}>
      <span className={styles.category} style={{ backgroundColor: item.bg }}>
        {item.name}
      </span>
      <h3 className={styles.postTitle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h3>
      <div className={styles.detail}>
        <span className={styles.username}>John Doe</span>
        <span className={styles.date}> - 10.03.2023</span>
      </div>
    </div>
  </Link>
);

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most popular</h1>
      <div className={styles.items}>
        {popularItems.slice(0, 4).map((menuItem) => (
          <MenuItem key={menuItem.name} item={menuItem} />
        ))}
      </div>

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        {categoryItems.map((category) => (
          <Link
            href="/blog?cat=style"
            className={styles.categoryItem}
            key={category.name}
            style={{ backgroundColor: category.bg }}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <h2 className={styles.subtitle}>Chosen by the edtor</h2>
      <h1 className={styles.title}>Editors pick</h1>
      <div className={styles.items}>
        {editorItems.slice(0, 4).map((menuItem) => (
          <MenuItem key={menuItem.name} item={menuItem} />
        ))}
      </div>
    </div>
  );
};
export default Menu;
