import * as C from "./styles";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";

interface InputRangeProps {
  value: number;
  onValueChange: (newValue: number) => void;
}

function InputRange({ value, onValueChange }: InputRangeProps) {
  const handleIncrement = () => {
    if (value < 5) {
      onValueChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > 1) {
      onValueChange(value - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= 1 && newValue <= 5) {
      onValueChange(newValue);
    }
  };

  return (
    <C.Container>
      <C.Button onClick={handleDecrement} disabled={value <= 1}>
        <img src={minusIcon} alt="Decrement" />
      </C.Button>
      <C.Input
        type="number"
        min="1"
        max="5"
        value={value}
        onChange={handleChange}
      />
      <C.Button onClick={handleIncrement} disabled={value >= 5}>
        <img src={plusIcon} alt="Increment" />
      </C.Button>
    </C.Container>
  );
}

export default InputRange;
