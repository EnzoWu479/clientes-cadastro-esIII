import { BsFillPersonFill } from "react-icons/bs";
import { v5 } from "uuid";
interface INavbarOption {
  label: string;
  to: string;
  icon: () => JSX.Element;
}
interface INavbarOptionWithId extends INavbarOption {
  id: string;
}

const NAVBAR_OPTIONS_NO_ID: INavbarOption[] = [
  {
    label: "Clientes",
    to: "/clientes",
    icon: () => <BsFillPersonFill />,
  },
];
export const NAVBAR_OPTIONS: INavbarOptionWithId[] = NAVBAR_OPTIONS_NO_ID.map(
  (o) => ({
    ...o,
    id: v5(o.to, v5.URL),
  })
);
