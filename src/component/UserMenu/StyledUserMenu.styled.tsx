import { Button, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const StyledUserMenuContainer = styled(View)`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const StyledNameUserMenu = styled(Text)`
  background: white;
  font-size: 15px;
  padding: 10px;
  border-radius: 25px;
`;

export const StyledButtonUserMenu = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  width: 100px;

  background: #ff3366;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 25px;
`;

export const StyledTextButtonUserMenu = styled(Text)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
`;
