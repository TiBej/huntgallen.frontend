import { Link } from "react-router-dom";
import AuthenticationButton from "components/authentication-button";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <AuthenticationButton />
        <br />
        <Link to="/">QR Scanner</Link>
        <br />
        <Link to="/rewards">Rewards</Link>
      </div>
      {children}
    </div>
  );
}
