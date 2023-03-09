import { useDisclosure } from "@chakra-ui/react";
import { TbHandStop } from "react-icons/tb";
import axios from "axios";
import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";
import StopModal from "./StopModal";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";

function StopButton({ setIsLogged, disableBetting }) {
  const { userName, userPoints } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateData = async () => {
    onOpen();
    const data = {
      name: userName,
      score: userPoints,
    };
    try {
      await axios.put("/api/update", data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = () => {
    setIsLogged(false);
    onClose();
  };

  return (
    <>
      <Button
        bgColor="yellow.600"
        color="teal.900"
        leftIcon={<TbHandStop />}
        mt={4}
        colorScheme="pink"
        variant="solid"
        onClick={updateData}
        _hover={{ bg: "teal.900", color: "yellow.600" }}
        isDisabled={disableBetting}
      >
        Stop Game
      </Button>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor="teal.900">
          <ModalHeader color="yellow.600">Saving Your Points...</ModalHeader>
          <ModalBody>
            <StopModal />
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor="yellow.600"
              color="teal.900"
              colorScheme="blue"
              mr={3}
              onClick={handleLogin}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default StopButton;
