import { useEffect, useMemo } from "react";
import {
  deletePhoneBookThunk,
  getPhoneBookThunk,
} from "../../../store/phonebook/thunkPhonebook";

import {
  RootStore,
  useAppDispatch,
  useAppSelector,
} from "../../../store/store";
import { Contact } from "../../../types/phonebookTypes";
import { View } from "react-native";
import {
  StyledButtonContacList,
  StyledContactListBoxItem,
  StyledContactListContainer,
  StyledContactListItem,
  StyledContactListNumber,
  StyledTextButtonContactList,
  StyledTextContactList,
  StyledTextErrorContactList,
} from "./StyledContactList.styled";
import { MyButtonProps } from "../../../types/customTypeElements";
import Loader from "../../Loader/Loader";

const MyStyledButton = ({ onPress, title }: MyButtonProps) => (
  <StyledButtonContacList onPress={onPress}>
    <StyledTextButtonContactList>{title}</StyledTextButtonContactList>
  </StyledButtonContacList>
);

const phoneBookSelector = (state: RootStore) => {
  return state.phoneBook as {
    contactList: Contact[];
    isLoading: boolean;
    error: string;
  };
};

const ContactLists = () => {
  const { contactList, isLoading, error } = useAppSelector(phoneBookSelector);
  const { filter } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhoneBookThunk());
  }, [dispatch]);

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contactList.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contactList, filter]);

  const handleDeleteContact = (contactId: string) => {
    dispatch(deletePhoneBookThunk(contactId));
  };

  return (
    <>
      {isLoading && <Loader />}
      <StyledContactListContainer>
        {!isLoading &&
          getVisibleContacts.map((item, index) => (
            <StyledContactListItem key={item.id}>
              <StyledContactListNumber>{1 + index}</StyledContactListNumber>
              <StyledContactListBoxItem>
                <View>
                  <StyledTextContactList>
                    Name: {item.name}
                  </StyledTextContactList>
                  <StyledTextContactList>
                     {item.number}
                  </StyledTextContactList>
                </View>
                <MyStyledButton
                  title="Delete"
                  onPress={() => {
                    handleDeleteContact(item.id);
                  }}
                />
              </StyledContactListBoxItem>
            </StyledContactListItem>
          ))}
      </StyledContactListContainer>
      {getVisibleContacts.length === 0 && isLoading && error === "" && (
        <StyledTextErrorContactList>
          I'm sorry, but there are not contacts
        </StyledTextErrorContactList>
      )}
      {error && !isLoading && (
        <StyledTextErrorContactList>{error}</StyledTextErrorContactList>
      )}
    </>
  );
};

export default ContactLists;
