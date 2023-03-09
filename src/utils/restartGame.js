
export const restartGame = (setNeedRestart, setPoints, setBet,toast) => {
    setNeedRestart(false);
    setPoints(1000);
    setBet(50);
    toast({
        title: "Game has been restarted",
        description: "You got 1000 points and 50 bet",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
