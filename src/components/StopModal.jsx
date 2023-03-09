import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import styles from "@/styles/StopModal.module.css";

const StopModal = () => {
  const { userName, userPoints } = useContext(UserContext);
  return (
    <div className={styles.mainContainer}>
      <h1>Hi {userName}!</h1>
      <h2>Your score is {userPoints}</h2>
      <p>
        "We will save your points and you can continue from where you left off
        next time."
      </p>
      <p>We hope we will see you soon! </p>
    </div>
  );
};

export default StopModal;
