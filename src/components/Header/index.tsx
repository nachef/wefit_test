import CartButton from "../CartButton";
import * as C from "./styles";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <CartButton />
    </C.Container>
  );
};

export default Header;
