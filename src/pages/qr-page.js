import { useState } from "react";
import QrReader from "react-qr-reader";
import Stack from "@mui/material/Stack";
import Layout from "components/layout";

export default function QRPage() {
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    if (data) setResult(data);
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <Layout>
      <Stack>
        <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%" }} />
        <p>{result}</p>
      </Stack>
    </Layout>
  );
}
