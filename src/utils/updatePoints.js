

export  const updatePoints = (userPoints,spinned,setPoints,bet,toast,setNeedRestart) => {
    if (spinned === "Double") {
      setPoints((prev) => prev + bet * 2);
      toast({
        title: 'DOUBLE!',
        description: "You doubled your bet!",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    else if (spinned === "Bankrupt!") {
      setPoints((prev) => prev - bet);
      toast({
        title: 'BANKRUPT!',
        description: `You lost ${bet} points!`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }else if (spinned === "Keep") {
      toast({
        title: 'KEEP!',
        description: "Nothing happened!Boooring!",
        status: 'info',
        duration: 9000,
        isClosable: true,
      })
    }
  };

