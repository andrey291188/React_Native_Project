import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const StyledContactListContainer = styled(View)`
  background: rgba(146, 135, 187, 0.8);
  width: 350px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  padding: 15px;
 
`;

export const StyledContactListItem = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 5px;
  border-width: 2px;
  border-radius: 10px;
  border-color: #e0d4d4
`;

export const StyledContactListNumber = styled(Text)`
    margin-right: 10px;
    font-size: 20px;
    background: white;
    padding: 5px;
    border-radius: 40px;
`

export const StyledContactListBoxItem = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const StyledTextContactList = styled(Text)``;

export const StyledButtonContacList = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  width: 100px;

  background: #ff3366;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 25px;
`;
export const StyledTextButtonContactList = styled(Text)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
`;

export const StyledTextErrorContactList = styled(Text)``;
