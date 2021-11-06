import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Layout from "components/layout";

const BASE_URL = "https://localhost:5000";

export default function RewardsPage() {
  const [history, setHistory] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessTokenSilently();

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .get(`${BASE_URL}/History`, config)
        .then((response) => {
          setHistory(response.data);
        })
        .catch((error) => console.log(error));
    };

    fetchData();
  }, []);

  const historyList = history?.map((entry) => {
    return <p>{entry.qr.description}</p>;
  });

  return (
    <Layout>
      <h1>Rewards</h1>
      {historyList}
    </Layout>
  );
}
