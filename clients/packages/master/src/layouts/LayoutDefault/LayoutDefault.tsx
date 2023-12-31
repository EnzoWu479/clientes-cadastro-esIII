import { Navbar } from "@/components/partials/Navbar/Navbar";
import { ChildContainer, Wrapper } from "./styles";
import { Outlet } from "react-router-dom";

export const LayoutDefault = () => {
  return (
    <Wrapper>
      <Navbar />
      <ChildContainer>
        <Outlet />
      </ChildContainer>
    </Wrapper>
  );
};
