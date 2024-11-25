import Portfolio from "@/component/portfolio";
import axios from "axios";

export default function Home({ profile }) {
  // Render the Portfolio component with the fetched profile data as a prop
  if (!profile) {
    return <div className="mt-10 text-center">
      <h3 className="text-xl">404 This page could not be found.</h3>
    </div>;
  }
  return <Portfolio profile={profile.data} />;
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
    return { props: { profile: null } };
  }
};
