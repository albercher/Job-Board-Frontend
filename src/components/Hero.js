import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";

function Hero({ handleSearch, setSearch, search }) {
  function handleChange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ pt: "20vh" }}
    >
      <Grid item>
        <Fade in={true} timeout={2000}>
          <Typography variant="h2" color="#FFFFFF">
            Your new job awaits.
          </Typography>
        </Fade>
      </Grid>
      <Grid item>
        <Fade in={true} timeout={3000}>
          <Paper
            component="form"
            elevation={3}
            sx={{
              p: "6px 6px",
              display: "flex",
              alignItems: "center",
              maxWidth: "800px", // change this
              mt: 3,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Who"
              inputProps={{ "aria-label": "who" }}
              name="who"
              onChange={handleChange}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="What"
              inputProps={{ "aria-label": "what" }}
              name="what"
              onChange={handleChange}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Where"
              inputProps={{ "aria-label": "where" }}
              name="where"
              onChange={handleChange}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Fade>
      </Grid>
    </Grid>
  );
}

export default Hero;
