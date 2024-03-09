import { useState } from "react";
import * as C from "./styles";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";

function InputRange() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
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
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <C.Button onClick={handleIncrement}>
        <img src={plusIcon} alt="Increment" />
      </C.Button>
    </C.Container>
  );
}

export default InputRange;
