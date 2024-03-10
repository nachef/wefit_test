import * as C from "./styles";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";

interface InputRangeProps {
  value: number;
  onValueChange: (newValue: number) => void;
}

function InputRange({ value, onValueChange }: InputRangeProps) {
  const handleIncrement = () => {
    onValueChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onValueChange(value - 1);
    }
  };

  return (
    <C.Container>
      <C.Button onClick={handleDecrement}>
        <img src={minusIcon} alt="Decrement" />
      </C.Button>
      <C.Input
        type="number"
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))}
      />
      <C.Button onClick={handleIncrement}>
        <img src={plusIcon} alt="Increment" />
      </C.Button>
    </C.Container>
  );
}

export default InputRange;
