import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const StyledHomepageContainer = styled(View)`
  background: rgba(146, 135, 187, 0.8);
  width: 80%;
  display: flex;
  align-items: center;

  border-radius: 15px;
  padding: 25px;
`;

export const StyledTitleHompage = styled(Text)`
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
`;

export const StyledButtonHompage = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  width: 80%;
  background: #ff3366;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
`;

export const StyledTextButtonHompage = styled(Text)`
 color: rgba(255, 255, 255, 0.8);
 font-size: 20px;
 `;
