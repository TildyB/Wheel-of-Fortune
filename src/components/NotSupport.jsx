import styles from "@/styles/NotSupport.module.css";

const NotSupport = () => {
  return (
    <div className={styles.text}>
      <h1>Sorry, your browser is not supported.</h1>
      <h2>Please switch to Chrome or Firefox browser.</h2>
    </div>
  );
};

export default NotSupport;
