import { useState, useRef } from "react";
import styled from "styled-components";
import { Image, Input, Button } from "../components";
import { images } from "../utils/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

const Errortext = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const _handleEmailChange = (email) => {
    const changeEmail = removeWhitespace(email);
    setEmail(changeEmail);
    setErrorMessage(
      validateEmail(changeEmail) ? " " : "Please verify your email"
    );
  };

  const _handlePasswordChange = (password) => {
    setPassword(removeWhitespace(password));
  };

  const _handleLoginButtonPress = () => {};

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container>
        <Image url={images.logo} imageStyle={{ borderRadius: 8 }}></Image>
        <Input
          label="Email"
          value={email}
          onChangeText={_handleEmailChange}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
        ></Input>
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={_handleLoginButtonPress}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        ></Input>
        <Errortext>{errorMessage}</Errortext>
        <Button title="Login" onPress={_handleLoginButtonPress}></Button>
        <Button
          title="sign up with email"
          onPress={() => navigation.navigate("Signup")}
          isFilled={false}
        ></Button>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
