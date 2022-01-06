import Result from "./Result";
import Grid from "@mui/material/Grid";

function Results({ listings, handleRemove, sort }) {
  if (sort === "date") {
    listings.sort((a, b) => {
      let aTitle = a.title.toLowerCase();
      let bTitle = b.title.toLowerCase();

      if (a.created_on > b.created_on) return -1;
      if (a.created_on < b.created_on) return 1;

      // if our created_on dates are the same, sort by title
      if (aTitle > bTitle) return 1;
      if (aTitle < bTitle) return -1;
    });
  } else if (sort === "company") {
    listings.sort((a, b) => {
      let aComp = a.company.name.toLowerCase();
      let bComp = b.company.name.toLowerCase();

      if (aComp < bComp) return -1;
      if (aComp > bComp) return 1;
    });
  } else if (sort === "title") {
    listings.sort((a, b) => {
      let aTitle = a.title.toLowerCase();
      let bTitle = b.title.toLowerCase();

      if (aTitle > bTitle) return 1;
      if (aTitle < bTitle) return -1;
    });
  }

  
  let resultArray = listings.map((listing) => (
    <Result key={listing.id} listing={listing} handleRemove={handleRemove} />
  ));

  return (
    <Grid container direction="column" alignItems="center">
      {resultArray}
    </Grid>
  );
}

export default Results;
