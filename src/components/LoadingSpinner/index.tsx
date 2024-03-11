import { Icon } from "./style";
import LoadingSVG from "../../assets/images/load-spinner.png";

function LoadingSpinner() {
  return (
    <Icon>
      <img src={LoadingSVG} alt="Loading spinner" />
    </Icon>
  );
}

export default LoadingSpinner;
