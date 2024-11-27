import PortfolioSkeleton from "@/component/porfoliosckleton";
import Portfolio from "@/component/portfolio";
import axios from "axios";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/them";
// You can replace this with a simple CSS spinner or any animation you'd like
const LoadingSpinner = () => (
  <div className="spinner">
    <div className="spin"></div>
  </div>
);

export default function Home({ profile }) {
  // State to track if the API call is in progress or failed
  const [isApiReady, setIsApiReady] = useState(true);


  function handleStartApis() {
    try {
      axios.get("https://portfolio-be-2-i5k7.onrender.com").then((res) => {
        res.data.message == "server running now!!!" ?  setIsApiReady(true) :""
     });
    } catch (error) {}
  }

  useEffect(() => {
    handleStartApis(); // Trigger the API call when the component mounts
  }, []);

  // If profile is not available, return a 404 message

  // Show loading spinner if the API is not ready
  if (!isApiReady) {
    handleStartApis();
    return <PortfolioSkeleton />;
  }

  if (!profile) {
    return (
      <div className="mt-10 text-center">
        <h3 className="text-xl">404 This page could not be found.</h3>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Portfolio profile={profile.data} />
    </ThemeProvider>
  );
}

export const getServerSideProps = async (context) => {
  const { username } = context.query; // Extract username from the URL query
  const uri = `https://portfolio-be-2-i5k7.onrender.com/userprofile/${username}`;

  try {
    const res = await axios.get(uri);
    const profile = res.data;

    // Return the fetched profile data as a prop
    return { props: { profile } };
  } catch (error) {
    console.error("Error fetching profile data:", error);

    // Return null profile data if there is an error
    // return { props: { profile: null } };
  }
};
