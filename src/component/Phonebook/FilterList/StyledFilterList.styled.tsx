import { View, TextInput } from "react-native";
import styled from "styled-components";

export const StyledFilterContainer = styled(View)`
  background: rgba(146, 135, 187, 0.8);
  width: 350px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
`;

export const StyledFilterInput = styled(TextInput)`
  color: black;
  background: white;
  width: 90%;
  padding: 8px;
  border-radius: 10px;
`;
