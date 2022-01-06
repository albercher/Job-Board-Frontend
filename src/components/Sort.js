import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Sort({ sort, setSort }) {
  // handle sort from button
  function handleSort(event, newSort) {
    if (newSort !== null){ // at least one button must be active
      setSort(newSort);
    }
  }


  return (
    <Box sx={{ width: "70%", mx: "auto" }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" align="center">
            Sort by
          </Typography>
          <ToggleButtonGroup
            value={sort}
            exclusive
            onChange={handleSort}
            aria-label="sort by"
            sx={{ backgroundColor: 'white'}}
            size="small"
          >
            <ToggleButton value="date" aria-label="by date">
              Date posted
            </ToggleButton>
            <ToggleButton value="company" aria-label="by company">
              Company
            </ToggleButton>
            <ToggleButton value="title" aria-label="by title">
              Title
            </ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Sort;
