import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    //Log in
    <Button variant="secondary" onClick={() => loginWithRedirect()}>
        Anmelden     
    </Button>
  );
}
