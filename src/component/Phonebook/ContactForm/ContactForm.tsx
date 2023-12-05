import { useState } from 'react';
import { createPhoneBookThunk } from '../../../store/phonebook/thunkPhonebook';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { Contact } from '../../../types/phonebookTypes';
import { StyledButtonContactForm, StyledContactFormContainer, StyledInputContactForm, StyledTextButtonContactForm, StyledTitleContactForm } from './StyledContactForm.styled';
import { MyButtonProps } from '../../../types/customTypeElements';
import { Alert } from "react-native";

type DataContact = Omit<Contact, "id">

const MyStyledButton = ({ onPress, title }: MyButtonProps) => (
  <StyledButtonContactForm onPress={onPress}>
    <StyledTextButtonContactForm>{title}</StyledTextButtonContactForm>
  </StyledButtonContactForm>
);

const ContactForm = () => {
  const { contactList } = useAppSelector(state => state.phoneBook as { contactList: Contact[] });
  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");

  const dispatch = useAppDispatch();

  const addContact = (value: DataContact) => {
    const { name: nameProps, number: numberProps } = value;
    const includsName = contactList.find(
      ({ name, number }) =>
        name.toLowerCase() === nameProps.toLowerCase() || number === numberProps
    );
    if (includsName) {
      Alert.alert("Error", `Name ${nameProps}, phone ${numberProps} is already in contacts`);
      return;
    }
    dispatch(createPhoneBookThunk(value));
  };

  const handleSubmit = () => {
    const values = {name: nameInput, number: numberInput}
    addContact(values);
  };

  return (
    <StyledContactFormContainer>
      <StyledTitleContactForm>Add contact</StyledTitleContactForm>
      <StyledInputContactForm
        placeholder="Name"
        value={nameInput}
        onChangeText={setNameInput}
      />
      <StyledInputContactForm
        placeholder="Number"
        value={numberInput}
        onChangeText={setNumberInput}
      />
      <MyStyledButton title="Submit" onPress={handleSubmit} />
    </StyledContactFormContainer>
  );
};

export default ContactForm;