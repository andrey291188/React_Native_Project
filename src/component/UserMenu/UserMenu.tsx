import { logOutThunk } from "../../store/authorization/thunkAuth";
import { RootStore, useAppDispatch, useAppSelector } from "../../store/store";
import { MyButtonProps } from "../../types/customTypeElements";
import { StyledButtonUserMenu, StyledNameUserMenu, StyledTextButtonUserMenu, StyledUserMenuContainer } from "./StyledUserMenu.styled";

type User = {
  email: string,
  name: string,
}

const MyStyledButton = ({ onPress, title }: MyButtonProps) => (
  <StyledButtonUserMenu onPress={onPress}>
    <StyledTextButtonUserMenu>{title}</StyledTextButtonUserMenu>
  </StyledButtonUserMenu>
);

const authSelector = (state: RootStore) => {
  return state.auth as { user: User };
};

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(authSelector)
  
 const handleLogOut = () => dispatch(logOutThunk())
  
  return (
     <StyledUserMenuContainer>
      <StyledNameUserMenu>Hello {user.name}</StyledNameUserMenu>
      <MyStyledButton onPress={handleLogOut} title="Logout" />
    </StyledUserMenuContainer>
    
  );
};

export default UserMenu;