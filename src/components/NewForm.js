import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function NewForm({
  formData,
  setFormData,
  addListing,
  handleClickOpen,
  handleClose,
  open,
}) {

  // stores our form data when there is a change in our search bar
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Box sx={{ textAlign: "center", my: 1 }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        List a new job
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>List a new job</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Have an opening? Tell us more about the position!
          </DialogContentText>
          <TextField
            id="name"
            name="company"
            label="Company"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            id="name"
            name="title"
            label="Title"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            id="name"
            name="location"
            label="State"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            id="name"
            name="description_short"
            label="Brief Description"
            fullWidth
            multiline
            rows={2}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            id="name"
            name="description_long"
            label="Full Description"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            id="name"
            name="employment_type"
            label="Employment Type"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addListing}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default NewForm;
