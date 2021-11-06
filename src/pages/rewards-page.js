import { useAuth0 } from "@auth0/auth0-react";
import { useApi } from "hooks/useApi";
import Layout from "components/layout";

function DataFetcher() {
  const opts = { audience: "https://huntgallen.heroku.app" };
  const { loginWithRedirect, getAccessTokenWithPopup } = useAuth0();
  const { loading, error, refresh, data } = useApi("https://localhost:5000/History", opts);
  const getTokenAndTryAgain = async () => {
    await getAccessTokenWithPopup(opts);
    refresh();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    if (error.error === "login_required") {
      return <button onClick={() => loginWithRedirect(opts)}>Login</button>;
    }
    if (error.error === "consent_required") {
      return <button onClick={getTokenAndTryAgain}>Consent to reading users</button>;
    }
    return <div>Oops {error.message}</div>;
  }

  return <ul>{JSON.stringify(data)}</ul>;
}

export default function RewardsPage() {
  return (
    <Layout>
      <p>Hii</p>
      {/* <DataFetcher /> */}
    </Layout>
  );
}
