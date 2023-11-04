import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.nav`
  width: 12rem;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.light2};
`;
export const LogoWrapper = styled.div`
  width: 60%;
  margin: 1rem auto;
  > img {
    width: 100%;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  margin-top: 2rem;
`;
export const NavItem = styled.li``;
export const NavOption = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1.5rem;
  height: 3rem;

  color: ${({ theme }) => theme.colors.dark1};
  text-decoration: none;

  border-left: 0;

  transition: all 0.1s ease;

  &:hover,
  &.active {
    border-left: 0.2rem solid ${({ theme }) => theme.colors.dark1};
    background-color: ${({ theme }) => theme.colors.light1}88;
    color: ${({ theme }) => theme.colors.dark2};
  }
`;
export const NavText = styled.span`
  font-family: ${({ theme }) => theme.fonts.family.secondary};
`;
export const NavIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img,
  > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
