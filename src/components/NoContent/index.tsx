// NoContent.tsx
import { useState, useEffect } from "react";
import Button from "../Button";
import * as C from "./styles";
import NoContentImage from "../../assets/images/no-content-image.png";
import NoContentImageMobile from "../../assets/images/no-content-mobile.png";

interface NoContentProps {
  title: string;
}

function NoContent({ title }: NoContentProps) {
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

  const imageSrc = isMobile ? NoContentImageMobile : NoContentImage;

  const handleButtonClick = () => {
    window.location.reload();
  };

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
          title="Recarregar página"
          onClick={handleButtonClick}
        />
      </C.ContentWrapper>
    </C.Container>
  );
}

export default NoContent;
