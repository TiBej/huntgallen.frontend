import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "components/layout";
import { useAuth0 } from "@auth0/auth0-react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { formatRelative } from "date-fns";

function HistoryList() {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState();

  const getData = async () => {
    const token = await getAccessTokenSilently({ audience: "https://huntgallen.heroku.app" });

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("https://localhost:5001/History", config)
      .then((result) => setData(result.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <p>Loading...</p>;
  if (data.length === 0) return <p>No history</p>;

  const items = data.map((item) => {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={item.qrDesription + " - Points: " + item.points}
          secondary={formatRelative(new Date(item.timeStamp), new Date())}
        />
      </ListItem>
    );
  });

  return <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>{items}</List>;
}

export default function HistoryPage() {
  return (
    <Layout>
      <HistoryList />
    </Layout>
  );
}
