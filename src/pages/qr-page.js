import { useState } from "react";
import QrReader from "react-qr-reader";
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
      <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%" }} />
      <p>{result}</p>
    </Layout>
  );
}
