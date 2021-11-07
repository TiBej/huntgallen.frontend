import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "components/layout";
import { useAuth0 } from "@auth0/auth0-react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Button from "@mui/material/Button";

function RewardView() {
  const { getAccessTokenSilently } = useAuth0();
  const [history, setHistory] = useState(0);
  const [rewards, setRewards] = useState();

  const getData = async () => {
    const token = await getAccessTokenSilently({ audience: "https://huntgallen.heroku.app" });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("https://localhost:5001/History", config)
      .then((result) => {
        let score = 0;
        result?.data?.map((element) => {
          score += element.points;
        });

        setHistory(score);
      })
      .catch((error) => console.log(error));

    axios
      .get("https://localhost:5001/Reward", config)
      .then((result) => {
        setRewards(result.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const items = rewards ? (
    rewards.map((item) => {
      return (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.description} secondary={"When reaching: " + item.atPoints} />
        </ListItem>
      );
    })
  ) : (
    <p>Loading...</p>
  );

  return (
    <>
      <Button sx={{ m: 2 }} onClick={() => getData()}>
        Aktualisieren
      </Button>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Stack>
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            Deine aktuellen Punkte: {history}
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 4 }}>
            Mögliche Belohnungen
          </Typography>
        </Stack>
      </Box>
      {items}
    </>
  );

  // return (
  //   <>
  //     <Button sx={{ m: 2 }} onClick={() => getData()}>
  //       Refresh
  //     </Button>
  //     <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>{items}</List>
  //   </>
  // );
}

export default function RewardsPage() {
  return (
    <Layout>
      <RewardView />
    </Layout>
  );
}
