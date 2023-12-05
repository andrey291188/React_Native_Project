import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const StyledContactFormContainer = styled(View)`
  background: rgba(146, 135, 187, 0.8);
  width: 350px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
`;

export const StyledTitleContactForm = styled(Text)`
  font-size: 18px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.8);
`;

export const StyledInputContactForm = styled(TextInput)`
  color: black;
  background: white;
  width: 90%;
  margin-bottom: 15px;
  padding: 8px;
  border-radius: 10px;
`;

export const StyledButtonContactForm = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  width: 80%;
  background: #ff3366;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
`;

export const StyledTextButtonContactForm = styled(Text)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
`;
