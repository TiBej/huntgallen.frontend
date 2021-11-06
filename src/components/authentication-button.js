import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "components/login-button";
import LogoutButton from "components/logout-button";

export default function AuthenticationButton() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
}
