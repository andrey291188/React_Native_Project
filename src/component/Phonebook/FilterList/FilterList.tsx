import { filterContact } from "../../../store/phonebook/FilterReducer";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { StyledFilterContainer, StyledFilterInput } from "./StyledFilterList.styled";

const FilterList = () => {
  const { filter } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const changeFilter = (text: string) => {
    dispatch(filterContact(text));
  };

  return (
    <StyledFilterContainer>
      <StyledFilterInput
        placeholder="Name"
        value={filter}
        onChangeText={changeFilter}
      />
    </StyledFilterContainer>
  );
};

export default FilterList;
