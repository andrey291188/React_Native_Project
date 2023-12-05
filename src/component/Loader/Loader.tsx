import { View, ActivityIndicator, Text } from "react-native";
import { StyledLoaderContainer } from "./StyledLoader.styled";


const Loader = () => {
    return (
        <StyledLoaderContainer>
           <ActivityIndicator size={"large"}/>
           <Text>Loading...</Text>
        </StyledLoaderContainer>
    )
}

export default Loader