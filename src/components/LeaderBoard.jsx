import styles from "@/styles/LeaderBoard.module.css";

const LeaderBoard = ({ user, index }) => {
  return (
    <div>
      <div className={styles.userDiv}>
        <h4>{index + 1}.</h4>
        <h3>{user.name}</h3>
        <h3>{user.score}</h3>
      </div>
      <hr className={styles.dashedLine}></hr>
    </div>
  );
};

export default LeaderBoard;
