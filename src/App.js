// hooks
import { useEffect, useState } from "react";

// components
import Hero from "./components/Hero";
import Results from "./components/Results";
import NewForm from "./components/NewForm";

// material-UI components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// images
import heroimg from "./heroimg4.jpg";

function App() {
  // USE STATES

  // store listing data
  let [listings, setListings] = useState([]);

  // store listing data to be displayed
  let [listingsDisplayed, setListingsDisplayed] = useState([]);

  // handle form dialog display
  const [open, setOpen] = useState(false);

  // controlled search input form
  let [search, setSearch] = useState({
    who: "",
    what: "",
    where: "",
  });

  // store controlled form data
  let [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    description_short: "",
    description_long: "",
    employment_type: "",
  });

  // fetch initial data and display upon loading
  useEffect(() => {
    fetch("http://localhost:9292/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setListingsDisplayed(data);
      });
  }, []);

  // FUNCTIONS

  // handle adding new listing
  function addListing() {
    fetch("http://localhost:9292/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setListings([...listings, data]);
        setListingsDisplayed([...listingsDisplayed, data]);
      });
    handleClose();
  }

  // handle form dialog display open and close
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // handle remove listing
  function handleRemove(id) {
    // delete request
    let filteredListings = listings.filter((listing) => listing.id !== id);
    let filteredListingsDisplayed = listingsDisplayed.filter(
      (listing) => listing.id !== id
    );
    fetch("http://localhost:9292/listings/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListings(filteredListings);
        setListingsDisplayed(filteredListingsDisplayed);
      });
  }

  // handle searches
  function handleSearch() {
    let filteredArr = []; // sets an empty array to hold our filtered results
    if (search.who && search.what && search.where) {
      filteredArr = listings.filter((listing) => {
        return (
          listing.company.name === search.who &&
          listing.title === search.what &&
          listing.location === search.where
        );
      });
    } else if (search.who && search.what) {
      filteredArr = listings.filter((listing) => {
        return (
          listing.company.name === search.who && listing.title === search.what
        );
      });
    } else if (search.what && search.where) {
      filteredArr = listings.filter((listing) => {
        return (
          listing.title === search.what && listing.location === search.where
        );
      });
    } else if (search.who && search.where) {
      filteredArr = listings.filter((listing) => {
        return (
          listing.company.name === search.who &&
          listing.location === search.where
        );
      });
    } else if (search.who) {
      filteredArr = listings.filter((listing) => {
        return listing.company.name === search.who;
      });
    } else if (search.what) {
      filteredArr = listings.filter((listing) => {
        return listing.title === search.what;
      });
    } else if (search.where) {
      filteredArr = listings.filter((listing) => {
        return listing.location === search.where;
      });
    }

    if (filteredArr.length > 0) {
      setListingsDisplayed(filteredArr);
    } else {
      // if no results, set our original data
      setListingsDisplayed(listings);
    }
  }

  return (
    <Box sx={{ backgroundColor: "#fdfdfd"}}>
      <Box
        sx={{
          // pt: 5,
          // px: 10,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.0), rgba(0,0,0,0.3)), url(${heroimg})`,
          height: "80vh",
          backgroundSize: "cover",
        }}
      >
        <Hero
          handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}
        />
      </Box>
      <Typography variant="h2" sx={{ mt: 4, textAlign: "center" }}>
        Listings
      </Typography>
      <NewForm
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        formData={formData}
        setFormData={setFormData}
        addListing={addListing}
      />
      <Results listings={listingsDisplayed} handleRemove={handleRemove} />
    </Box>
  );
}

export default App;
