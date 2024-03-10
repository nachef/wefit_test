// NoContent.tsx
import { useState, useEffect } from "react";
import Button from "../Button";
import * as C from "./styles";

export type NoContentProps = {
  title: string;
  imageDesktop: string;
  imageMobile: string;
  buttonTitle: string;
  onButtonClick?: () => void;
};

function NoContent({
  title,
  imageDesktop,
  imageMobile,
  buttonTitle,
  onButtonClick,
}: NoContentProps) {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSrc = isMobile ? imageMobile : imageDesktop;

  return (
    <C.Container>
      <C.ContentWrapper>
        <C.Title>{title}</C.Title>
        <C.Image
          src={imageSrc}
          alt="No Content"
          style={{ height: isMobile ? "265.36px" : "auto" }}
        />
        <Button
          width="173px"
          height="40px"
          color="#009EDD"
          title={buttonTitle}
          onClick={onButtonClick}
        />
      </C.ContentWrapper>
    </C.Container>
  );
}

export default NoContent;
