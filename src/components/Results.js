import Result from "./Result";
import Grid from "@mui/material/Grid";

function Results({ listings, handleRemove, sortData, sort }) {
  let sorted = [];
  if (sort === "date") {
    sorted = listings.sort(function (a, b) {
      if (a.created_on > b.created_on) return -1;
      if (a.created_on < b.created_on) return 1;

      // if our created_on dates are the same, sort by title
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    });
  } else if (sort === "company") {
    sorted = listings.sort(function (a, b) {
      if (a.company.name.toLowerCase() < b.company.name.toLowerCase()) return -1;
      if (a.company.name.toLowerCase() > b.company.name.toLowerCase()) return 1;
    });
  } else if (sort === "title") {
    sorted = listings.sort(function (a, b) {
      // return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
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
