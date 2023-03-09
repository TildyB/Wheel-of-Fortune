import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import styles from "@/styles/LoginComponent.module.css";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import axios from "axios";

const LoginComponent = ({ setIsLogged }) => {
  const { userName, setUserName, setPoints } = useContext(UserContext);

  const senData = async () => {
    const data = {
      name: userName,
    };
    try {
      const response = await axios.post("/api/login", data);
      const user = await response.data;

      if (response.status === 200 || response.status === 201) {
        handleLogin();
        setPoints(user.score);
        setUserName(user.name);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = () => {
    setIsLogged(true);
  };
  return (
    <div className={styles.loginMain}>
      <div className={styles.firstDiv}>
        <h2>Welcome To The</h2>
        <h1>Wheel of Fortune</h1>
      </div>
      <div className={styles.imgDiv}>
        <img src="images/result.png" alt="wheel" />
      </div>
      <div className={styles.secondDiv}>
        <FormControl id="name" textAlign="center">
          <FormLabel color="yellow.400">Please enter your name</FormLabel>
          <Input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            borderColor="yellow.600"
            color="yellow.600"
          />
          {userName === "" && (
            <h2>The username must contain at least one character.</h2>
          )}
          <Button
            isDisabled={userName === ""}
            bgColor="yellow.400"
            mt="10px"
            size="md"
            onClick={senData}
          >
            Login
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default LoginComponent;
