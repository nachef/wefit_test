import { useNavigate } from "react-router-dom";

export function useRedirect() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return { redirectToHome };
}
