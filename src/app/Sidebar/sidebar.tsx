import Link from 'next/link';
import styles from './../styles/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuItem}>
        <Link href="/">
          홈
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/list">
          상품목록
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/about">
        소개
        </Link>
      </div>
      <div className={styles.menuItem}>
        <Link href="/contact">
          연락처
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
