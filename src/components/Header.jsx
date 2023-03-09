import DrawerExample from "@/components/Drawer";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img src="images/result.png" alt="wheel" />
      <div className={styles.headerLeftDiv}>
        <DrawerExample />
      </div>
    </header>
  );
};

export default Header;
