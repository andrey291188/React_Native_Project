import ContactForm from "../../component/Phonebook/ContactForm/ContactForm";
import ContactLists from "../../component/Phonebook/ContactList/ContactList";
import FilterList from "../../component/Phonebook/FilterList/FilterList";
import { StyledImageBackground } from "../../component/StyledMyApp.styled";
import UserMenu from "../../component/UserMenu/UserMenu";
import {
  StyledContainerContacts,
  StyledTitleContacts,
} from "./StyledContact.styled";
import { ScrollView } from "react-native";

const Contacts = () => {
  return (
    <StyledImageBackground source={require("../../imgFolder/slider-2.jpg")}>
      <ScrollView>
      <StyledContainerContacts>
        <UserMenu />
        <StyledTitleContacts>Phonebook</StyledTitleContacts>
        <ContactForm />
        <StyledTitleContacts>Filter</StyledTitleContacts>
        <FilterList />
        <StyledTitleContacts>Contacts</StyledTitleContacts>
        <ContactLists />
      </StyledContainerContacts>
      </ScrollView>
    </StyledImageBackground>
  );
};

export default Contacts;
