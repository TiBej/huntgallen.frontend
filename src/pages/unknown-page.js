import Typography from "@mui/material/Typography";
import Box from "@mui/material/Typography";
import Layout from "components/layout";

export default function UnknownPage() {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <Typography variant="h4">Page unknown</Typography>
      </Box>
    </Layout>
  );
}
