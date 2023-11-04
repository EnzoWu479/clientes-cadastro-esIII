import { img_logo } from "@/assets";
import {
  Container,
  LogoWrapper,
  NavIconWrapper,
  NavItem,
  NavList,
  NavOption,
  NavText,
} from "./styles";
import { NAVBAR_OPTIONS } from "./options";

export const Navbar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={img_logo} alt="logo" />
      </LogoWrapper>
      <NavList>
        {NAVBAR_OPTIONS.map((option) => (
          <NavItem key={option.id}>
            <NavOption to={option.to}>
              <NavIconWrapper>
                <option.icon />
              </NavIconWrapper>
              <NavText>{option.label}</NavText>
            </NavOption>
          </NavItem>
        ))}
      </NavList>
    </Container>
  );
};
