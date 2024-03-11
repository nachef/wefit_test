import React from "react";
import * as C from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <C.Container>{children}</C.Container>;
}

export default Container;
