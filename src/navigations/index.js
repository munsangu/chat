import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { Spinner } from "../components";
import { ProgressContext, UserContext } from "../contexts";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user?.uid && user?.email ? (
        <MainStack></MainStack>
      ) : (
        <AuthStack></AuthStack>
      )}
      {inProgress && <Spinner></Spinner>}
    </NavigationContainer>
  );
};

export default Navigation;
