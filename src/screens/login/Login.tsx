import React, { useState } from "react";
import { logInThunk } from "../../store/authorization/thunkAuth";
import { useAppDispatch } from "../../store/store";
import {
  StyledButtonLogin,
  StyledInputLogin,
  StyledLoginContainer,
  StyledTextButtonLogin,
  StyledTitleLogin,
} from "./StyledLogin.styled";
import { StyledImageBackground } from "../../component/StyledMyApp.styled";
import { MyButtonProps } from "../../types/customTypeElements";

const MyStyledButton = ({ onPress, title }: MyButtonProps) => (
  <StyledButtonLogin onPress={onPress}>
    <StyledTextButtonLogin>{title}</StyledTextButtonLogin>
  </StyledButtonLogin>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const values = { email, password };
    dispatch(logInThunk(values));
  };
  return (
    <StyledImageBackground source={require("../../imgFolder/slider-2.jpg")}>
      <StyledLoginContainer>
        <StyledTitleLogin>Login</StyledTitleLogin>
        <StyledInputLogin
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <StyledInputLogin
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <MyStyledButton title="Submit" onPress={handleSubmit} />
      </StyledLoginContainer>
    </StyledImageBackground>
  );
};

export default Login;
