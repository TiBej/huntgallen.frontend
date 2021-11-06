import { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import { Modal, Stack, Typography, Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "components/layout";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function QRPage() {
  const [scanResult, setScanresult] = useState();
  const [qrCode, setQrCode] = useState();
  const { getAccessTokenSilently } = useAuth0();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleScan = (data) => {
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

    setScanresult("Loading...");

    axios
      .put("https://localhost:5001/History?qrcode=" + qrCode, {}, config)
      .then((result) => {
        // TODO: Add modal
        setScanresult(result.data.description + " - Punkte: " + result.data.points);
        handleOpen();
      })
      .catch((error) => {
        setScanresult("Unable to validate code");
      });
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Erfolgreich registriert: {scanResult}
          </Typography>
          <img src="feedback.png" alt="Success" width="250px" />
        </Box>
      </Modal>
      <Stack>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <Typography variant="h6">{scanResult}</Typography>
        </Box>
      </Stack>
    </Layout>
  );
}
