import { useState } from "react";
import QrReader from "react-qr-reader";

function App() {
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    if (data) setResult(data);
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%" }} />
      <p>{result}</p>
    </div>
  );
}

export default App;
