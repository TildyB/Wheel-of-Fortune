import { useDisclosure } from "@chakra-ui/react";
import { CircularProgress } from "@chakra-ui/react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import axios from "axios";
import LeaderBoard from "./LeaderBoard";

function DrawerExample() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const getleaderBoard = async () => {
    onOpen();
    try {
      const response = await axios.get("/api/leaderboard");
      const { users } = await response.data;
      users.sort((a, b) => b.score - a.score);
      setUsers(users);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  const closeButton = () => {
    setIsLoading(true);
    onClose();
  };

  return (
    <>
      <Button
        ref={btnRef}
        bgColor="main.200"
        color="main.100"
        onClick={getleaderBoard}
      >
        Leaderboard
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={closeButton}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="main.200" color="main.100">
          <DrawerCloseButton />
          <DrawerHeader>LeaderBoard</DrawerHeader>
          <DrawerBody  >
            {isLoading ? (
              <CircularProgress
                isIndeterminate
                color="main.100"
                trackColor="main.300"
                display="flex"
                h="50%"
                size="100px"
                alignItems="center"
                justifyContent="center"
              />
            ) : (
              users.map((user, index) => {
                return <LeaderBoard key={user.name} {...{ index, user }} />;
              })
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={closeButton}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
