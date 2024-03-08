import Button from "../Button";
import * as C from "./styles";

function NoContent() {
  return (
    <div>
      <C.Container>
        <Button
          width="173px"
          height="40px"
          color="#009EDD"
          title="Recarregar página"
        />
      </C.Container>
    </div>
  );
}

export default NoContent;
