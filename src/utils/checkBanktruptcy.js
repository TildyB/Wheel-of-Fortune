export const checkBanktruptcy =  (userPoints,toast,setNeedRestart) => {
    if (userPoints <= 0) {
      toast({
        title: "You are banktrupt",
        description: "You have no more points",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setNeedRestart(true);
    }
  };