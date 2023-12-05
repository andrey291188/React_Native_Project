import { Text, TouchableOpacity } from "react-native";
import { StyledImageBackground } from "../../component/StyledMyApp.styled";
import {
  StyledButtonHompage,
  StyledHomepageContainer,
  StyledTextButtonHompage,
  StyledTitleHompage,
} from "./StyledHomepage.styled";
import { MyButtonProps } from "../../types/customTypeElements";


const MyStyledButton = ({ onPress, title }: MyButtonProps) => (
  <StyledButtonHompage onPress={onPress}>
    <StyledTextButtonHompage>{title}</StyledTextButtonHompage>
  </StyledButtonHompage>
);

const Homepage = ({ navigation }: any) => {
  return (
    <StyledImageBackground source={require("../../imgFolder/slider-2.jpg")}>
      <StyledHomepageContainer>
        <StyledTitleHompage>Hello, this is a mobile version of the contact book made using React Native technology</StyledTitleHompage>
        <MyStyledButton
          onPress={() => navigation.navigate("registered")}
          title="Registered"
        />
        <MyStyledButton
          onPress={() => navigation.navigate("login")}
          title="Login"
        />
      </StyledHomepageContainer >
    </StyledImageBackground>
  );
};

export default Homepage;
