import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    IconButton,
    Box,
    CircularProgress,
    Slide,
    Fade,
    Grow,
    Skeleton,
  } from "@mui/material";
  
  const PortfolioSkeleton = () => {
    return (
      <Box sx={{ padding: 0 }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 400,
            backgroundColor: "#ccc", // Placeholder background
            borderRadius: "8px",
            marginBottom: 6,
            boxShadow: 3,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              transform: "translateY(-50%)",
              textAlign: "center",
              color: "white",
            }}
          >
            <Skeleton variant="text" width="200px" height={50} sx={{ marginBottom: 2 }} />
            <Skeleton variant="text" width="300px" height={30} />
          </Box>
        </Box>
  
        {/* Profile Section */}
        <Box sx={{ textAlign: "center", padding: 4 }}>
          <Fade in={true} timeout={1000}>
            <Skeleton variant="circular" width={180} height={180} sx={{ marginBottom: 2 }} />
          </Fade>
          <Skeleton variant="text" width="300px" height={40} sx={{ marginBottom: 1 }} />
          <Skeleton variant="text" width="200px" height={30} sx={{ marginBottom: 3 }} />
          <Skeleton variant="text" width="500px" height={50} sx={{ marginBottom: 3 }} />
          <Skeleton variant="rectangular" width={200} height={50} sx={{ margin: "auto" }} />
        </Box>
  
        {/* Skills Section */}
        <Box
          sx={{
            padding: "60px 20px",
            background: "#f7f7f7",
            textAlign: "center",
          }}
        >
          <Skeleton variant="text" width="150px" height={50} sx={{ margin: "auto", marginBottom: 4 }} />
          <Grid container spacing={4} justifyContent="center">
            {[...Array(3)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Skeleton variant="rectangular" height={180} />
              </Grid>
            ))}
          </Grid>
        </Box>
  
        {/* Projects Section */}
        <Box sx={{ padding: "60px 20px", background: "#222", color: "white" }}>
          <Skeleton variant="text" width="150px" height={50} sx={{ margin: "auto", marginBottom: 4 }} />
          <Grid container spacing={4} justifyContent="center">
            {[...Array(3)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Skeleton variant="rectangular" height={250} />
              </Grid>
            ))}
          </Grid>
        </Box>
  
        {/* Services Section */}
        <Box
          sx={{
            padding: "60px 20px",
            background: "#f7f7f7",
            textAlign: "center",
          }}
        >
          <Skeleton variant="text" width="150px" height={50} sx={{ margin: "auto", marginBottom: 4 }} />
          <Grid container spacing={4} justifyContent="center">
            {[...Array(3)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Skeleton variant="rectangular" height={180} />
              </Grid>
            ))}
          </Grid>
        </Box>
  
        {/* Social Media Section */}
        <Box
          sx={{
            padding: "40px 0",
            background: "#222",
            color: "white",
            textAlign: "center",
          }}
        >
          <Skeleton variant="text" width="150px" height={50} sx={{ marginBottom: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {[...Array(5)].map((_, index) => (
              <IconButton key={index} sx={{ color: "#fff", margin: "0 10px" }}>
                <Skeleton variant="circular" width={40} height={40} />
              </IconButton>
            ))}
          </Box>
        </Box>
  
        {/* Contact Form Section */}
        <Box
          sx={{
            padding: "60px 20px",
            background: "#f7f7f7",
            textAlign: "center",
          }}
        >
          <Skeleton variant="text" width="150px" height={50} sx={{ margin: "auto", marginBottom: 4 }} />
          <Skeleton variant="rectangular" height={350} sx={{ margin: "auto" }} />
        </Box>
  
        {/* Footer */}
        <Box
          component="footer"
          sx={{
            backgroundColor: "#3f51b5",
            color: "white",
            textAlign: "center",
            padding: "1rem",
            position: "relative",
            bottom: 0,
            width: "100%",
          }}
        >
          <Skeleton variant="text" width="200px" height={20} sx={{ marginBottom: 1 }} />
          <Skeleton variant="text" width="250px" height={20} />
        </Box>
      </Box>
    );
  };
  
  export default PortfolioSkeleton;
  