import styles from "@/styles/GameRules.module.css";

const GameRules = () => {
  return (
    <div className={styles.gameRightContainer}>
      <div>
        <h1>Rules of the game</h1>
      </div>
      <div className={styles.ruleCard}>
        <h3>Welcome to the Wheel of Fortune game.</h3>
        <hr className={styles.dashedLine}></hr>
        <p>
          The game is quite simple. Before spinning, place a bet and whatever
          the wheel shows happens to your bet. The goal is to collect the most
          money.
        </p>
        <hr className={styles.dashedLine}></hr>
        <p>There are three options on the wheel.</p>
        <h4>1. Bankrupt: you lose all the bet you placed.</h4>
        <h4>2. Keep: you keep your bet but you didn't win anything.</h4>
        <h4>3. Double: This is the best option.</h4>
        <hr className={styles.dashedLine}></hr>
        <p>Good luck and try to collect as much money as possible.</p>
      </div>
    </div>
  );
};

export default GameRules;
