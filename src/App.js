import "./App.css";
// import Navbar from "./Components/Navbar";
// import Player from "./Components/Player";
// import SideSection from "./Components/SideSection";
// import MainWindow from "./Components/MainWindow";
import { useEffect, useState } from "react";
import Welcomepage from "./Components/Welcomepage";
import MobilePlayer from "./Components/MobilePlayer";

// const apiUrl = process.env.REACT_APP_API_URL;
// const apiKey = process.env.REACT_APP_API_KEY;

// console.log("API URL:", apiUrl);
// console.log("API Key:", apiKey);



function App() {
  const [accessToken, setAccessToken] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);

useEffect(() => {
  const intervalID = setInterval(() => {
    setShowLoader(false);
    setShowPlayer(true)
  }, 5000);

  return () => clearInterval(intervalID);
}, []);


console.log(accessToken)

useEffect(()=>{
  getToken();
},[])
const getToken = async () => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID; // Set in .env
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET; // Set in .env

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`, // Base64 encoding of clientId:clientSecret
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  });

  const data = await response.json();
  setAccessToken( data.access_token); // Use this token for further API calls
};



const getArtistData = async () => {
  const artistId = "4Z8W4fKeB5YxbusRsdQVPb"; // Replace with the desired artist's Spotify ID
  const token = accessToken; // Replace with your valid Bearer token

  try {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Log the artist data
    return data;
  } catch (error) {
    console.error("Failed to fetch artist data:", error);
  }
};

console.log(getArtistData())
  return (
    <>
    {showLoader &&  <Welcomepage/> }
    {showPlayer &&  <MobilePlayer/>}

      {/* <Navbar />
      <SideSection />
      <MainWindow />
      <Player /> */}
    </>
  );
}

export default App;
