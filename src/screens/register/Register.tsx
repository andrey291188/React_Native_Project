import React, { useState } from "react";
import { registerThunk } from "../../store/authorization/thunkAuth";
import { useAppDispatch } from "../../store/store";
import {
  StyledButtonRegister,
  StyledInputRegister,
  StyledRegisterContainer,
  StyledTextButtonRegister,
  StyledTitleRegister,
} from "./StyledRegister.styled";
import { StyledImageBackground } from "../../component/StyledMyApp.styled";
import { MyButtonProps } from "../../types/customTypeElements";


const MyStyledButton = ({ onPress, title }: MyButtonProps) => (
  <StyledButtonRegister onPress={onPress}>
    <StyledTextButtonRegister>{title}</StyledTextButtonRegister>
  </StyledButtonRegister>
);

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const values = { name, email, password };
    dispatch(registerThunk(values));
  };

  return (
    <StyledImageBackground source={require("../../imgFolder/slider-2.jpg")}>
      <StyledRegisterContainer>
        <StyledTitleRegister>Registration</StyledTitleRegister>
        <StyledInputRegister
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <StyledInputRegister
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <StyledInputRegister
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <MyStyledButton title="Submit" onPress={handleSubmit} />
      </StyledRegisterContainer>
    </StyledImageBackground>
  );
};

export default Register;
