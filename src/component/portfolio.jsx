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
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ContactForm from "./contact";

// Custom hook to track scroll position
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollY;
};

const Portfolio = ({ profile }) => {
  // Fallback UI if no profile is provided
  if (!profile) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  const {
    Skills,
    Projects,
    Services,
    SocialMedia,
    Banner,
    ProfilePic,
    Name,
    Title,
    Discription,
  } = profile;
  const skills = Skills ? JSON.parse(Skills) : [];
  const projects = Projects ? JSON.parse(Projects) : [];
  const services = Services ? JSON.parse(Services) : [];
  const socialMedia = SocialMedia ? JSON.parse(SocialMedia) : [];

  // Track scroll position for scroll-based animations
  const scrollPosition = useScrollPosition();

  return (
    <Box sx={{ padding: 0 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 400,
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", letterSpacing: 1 }}
          >
            {Name}'s World
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "lighter", marginTop: 1 }}>
            A glimpse into my projects, skills, and services.
          </Typography>
        </Box>
      </Box>

      {/* Profile Section */}
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <Fade in={true} timeout={1000}>
          <img
            src={ProfilePic}
            alt={Name}
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              border: "5px solid #fff",
              marginBottom: "20px",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </Fade>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#333", marginBottom: 1 }}
        >
          Hello, I'm {Name}!
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#777", fontWeight: "lighter", marginBottom: 3 }}
        >
          I am a {Title},
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#555", maxWidth: 800, margin: "auto", marginBottom: 3 }}
        >
          {Discription}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: "12px 25px",
            background: "linear-gradient(to right, #ff7e5f, #feb47b)",
            "&:hover": {
              background: "linear-gradient(to left, #ff7e5f, #feb47b)",
            },
            fontWeight: "bold",
          }}
        >
          View My Projects
        </Button>
      </Box>

      {/* Skills Section */}
      {skills.length > 0 && (
        <Box
          sx={{
            padding: "60px 20px",
            background: "#f7f7f7",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
            Skills
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill) => (
              <Grid item xs={12} sm={6} md={4} key={skill.name}>
                <Grow in={scrollPosition > 300} timeout={1000}>
                  <Card
                    sx={{
                      maxWidth: 320,
                      borderRadius: 2,
                      boxShadow: 3,
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: 4,
                      }}
                    >
                      <img
                        src={skill.logoUrl}
                        alt={skill.name}
                        style={{ width: 60, height: 60, marginBottom: 10 }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {skill.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <Box sx={{ padding: "60px 20px", background: "#222", color: "white" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: 4, textAlign: "center" }}
          >
            Projects
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.name}>
                <Slide in={scrollPosition > 500} direction="up" timeout={1000}>
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.imageUrl}
                      alt={project.name}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {project.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#ccc", marginBottom: 2 }}
                      >
                        {project.description}
                      </Typography>
                      {/* <Button href={project.githubUrl} target="_blank" >
                        View 
                      </Button> */}
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Services Section */}
      {services.length > 0 && (
        <Box
          sx={{
            padding: "60px 20px",
            background: "#f7f7f7",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
            Services
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.name}>
                <Slide in={scrollPosition > 700} direction="up" timeout={1000}>
                  <Card
                    sx={{
                      maxWidth: 320,
                      borderRadius: 2,
                      boxShadow: 3,
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={service.imageUrl}
                      alt={service.name}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {service.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#777", marginBottom: 2 }}
                      >
                        {service.description}
                      </Typography>
                      <Button
                        href={service.link}
                        target="_blank"
                        sx={{
                          background: "#ff7e5f",
                          "&:hover": { background: "#feb47b" },
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Social Media Section */}
      {socialMedia.length > 0 && (
        <Box
          sx={{
            padding: "40px 0",
            background: "#222",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Connect with me
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {socialMedia.map((platform) => (
              <IconButton
                key={platform.name}
                sx={{ color: "#fff", margin: "0 10px" }}
                href={`https://${platform.url}`}
                target="_blank"
              >
                <img
                  src={platform.logoUrl}
                  alt={platform.name}
                  style={{ width: 30, height: 30 }}
                />
              </IconButton>
            ))}
          </Box>
        </Box>
      )}

      {/* Contact Form */}
      <Box
        sx={{
          padding: "60px 20px",
          background: "#f7f7f7",
          textAlign: "center",
        }}
      >
        <ContactForm id={profile.UserID} />
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
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} {Name}. All Rights Reserved.
        </Typography>
        <Typography variant="caption">
          Created with ❤️ using Next.js and Material UI
        </Typography>
      </Box>
    </Box>
  );
};

export default Portfolio;
