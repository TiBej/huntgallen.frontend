import { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import Stack from "@mui/material/Stack";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "components/layout";
import axios from "axios";

export default function QRPage() {
  const [scanResult, setScanresult] = useState();
  const [qrCode, setQrCode] = useState();
  const { getAccessTokenSilently } = useAuth0();

  const handleScan = (data) => {
    if (data) setScanresult(data);
    const splitList = data?.split("/");
    if (splitList) {
      setQrCode(splitList[splitList.length - 1]);
    }
  };

  const getData = async (qrCode) => {
    const token = await getAccessTokenSilently({ audience: "https://huntgallen.heroku.app" });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    console.log(qrCode, "Hiiiii");

    axios
      .put("https://localhost:5001/History?qrcode=" + qrCode, {}, config)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (qrCode) {
      getData(qrCode);
    }
  }, [qrCode]);

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <Layout>
      <Stack>
        <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%", maxWidth: "500px" }} />
        <p>{scanResult}</p>
      </Stack>
    </Layout>
  );
}
