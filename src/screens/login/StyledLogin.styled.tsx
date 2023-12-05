import { Button, Text, View, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const StyledLoginContainer = styled(View)`
      background: rgba(146, 135, 187, 0.8);
  width: 80%;
  display: flex;
  align-items: center;

  border-radius: 15px;
  padding: 25px;
`

export const StyledTitleLogin = styled(Text)`
      font-size: 18px;
  margin-bottom: 10px;
`

export const StyledInputLogin = styled(TextInput)`
    color: black;
background: white;
width: 90%;
   margin-bottom: 15px;
   padding: 8px;
   border-radius: 10px;
`

export const StyledButtonLogin = styled(TouchableOpacity)`
       display: flex;
  align-items: center;
  width: 80%;
  background: #ff3366;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
`

export const StyledTextButtonLogin = styled(Text)`
 color: rgba(255, 255, 255, 0.8);
 font-size: 20px;
 `;