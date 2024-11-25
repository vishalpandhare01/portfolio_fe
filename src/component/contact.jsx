import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import axios from "axios";

const ContactForm = ({id}) => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Message: "",
    IpAdress: "192.168.1.1", // Example IP address, can be dynamic
    Location: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData({ ...formData, Location: `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}` });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  
  useEffect(() => {
    getLocation();
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponseMessage("");

    try {
      const response = await axios.post(
        `https://portfolio-be-2-i5k7.onrender.com/addContact/${id}`,
        formData
      );
      setLoading(false);
      setResponseMessage("Contact added successfully!");
      setFormData({
        Name: "",
        Phone: "",
        Email: "",
        Message: "",
        IpAdress: "192.168.1.1", // Example IP address, can be dynamic
        Location: "",
      })
    } catch (error) {
      setLoading(false);
      setResponseMessage("Failed to add contact.");
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              required
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "16px" }}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {responseMessage && (
        <Typography variant="body1" color={responseMessage.includes("successfully") ? "green" : "red"} style={{ marginTop: "16px" }}>
          {responseMessage}
        </Typography>
      )}
    </Container>
  );
};

export default ContactForm;

