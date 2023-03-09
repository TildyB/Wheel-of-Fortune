import { useToast } from "@chakra-ui/react";
import {
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import StopButton from "@/components/StopButton";
import WheelComponent from "@/components/newWheel";
import styles from "@/styles/Game.module.css";
import { UserContext } from "@/contexts/UserContext";
import { useState, useContext, useEffect } from "react";
import { updatePoints } from "@/utils/updatePoints";
import { checkBanktruptcy } from "@/utils/checkBanktruptcy";
import { restartGame } from "@/utils/restartGame";
import NotSupport from "@/components/NotSupport";

const Game = ({ setIsLogged }) => {
  let checkSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && window["safari"].pushNotification)
    );
  const { userName, userPoints, setPoints } = useContext(UserContext);
  const [bet, setBet] = useState(50);
  const [spinned, setSpinned] = useState("");
  const [disableBetting, setDisableBetting] = useState(false);
  const [needRestart, setNeedRestart] = useState(false);
  const [isSafari, setIsSafari] = useState(checkSafari);
  const handleChange = (bet) => setBet(Number(bet));
  const toast = useToast();

  useEffect(() => {
    if (!needRestart) {
      updatePoints(userPoints, spinned, setPoints, bet, toast, setNeedRestart);
      setSpinned("");
    }
  }, [spinned]);

  useEffect(() => {
    checkBanktruptcy(userPoints, toast, setNeedRestart);
  }, [userPoints]);

  return (
    <div className={styles.mainGameDiv}>
      <div className={styles.leftGameDiv}>
        <div className={styles.userDataMain}>
          <div className={styles.userData}>
            <h1>UserName: {userName}</h1>
          </div>
          <div className={styles.userData}>
            <h2>Points: {userPoints}</h2>
          </div>
        </div>
        <div className={styles.betDiv}>
          <h2>Place your bets:</h2>
          <NumberInput
            step={10}
            min={10}
            w={100}
            h={10}
            value={bet}
            onChange={handleChange}
            max={userPoints}
            isDisabled={needRestart || disableBetting}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            color="main.100"
            bgColor="main.300"
            onClick={() => setBet(userPoints)}
            isDisabled={disableBetting}
          >
            All in
          </Button>
        </div>
        {needRestart && (
          <Button
            onClick={() =>
              restartGame(setNeedRestart, setPoints, setBet, setSpinned, toast)
            }
            color="main.100"
            bgColor="main.300"
          >
            Restart
          </Button>
        )}
        <StopButton {...{ setIsLogged, disableBetting }} />
      </div>
      <div className={styles.rightGameDiv}>
        {!isSafari ? (
          <WheelComponent {...{ setSpinned, setDisableBetting }} />
        ) : (
          <NotSupport />
        )}
      </div>
    </div>
  );
};

export default Game;
