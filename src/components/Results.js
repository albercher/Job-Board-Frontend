import Result from "./Result";
import Grid from "@mui/material/Grid";

function Results({ listings, handleRemove }) {
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
