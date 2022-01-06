import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";

import { useState } from "react";

function Result({ listing, handleRemove }) {
  // USE STATES
  // is our long description displayed or not
  const [expanded, setExpanded] = useState(false);
  // handles our heart toggle
  const [favorited, setFavorite] = useState(false);

  // handle expaned listing (display the long description)
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  // on click, expand our card
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // handle toggling heart icon and changing color
  function handleFavorite() {
    setFavorite(!favorited);
  }

  return (
    <Card sx={{ width: "70%", my: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">
          {listing.company.name} • {listing.employment_type}
        </Typography>
        <Typography variant="h4">{listing.title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {listing.description_short}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleFavorite}
          color={favorited ? "error" : "default"}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          aria-label="remove"
          onClick={() => handleRemove(listing.id)}
        >
          <ClearIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{listing.description_long}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Result;
