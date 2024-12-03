import React from "react";
import Abounav from "../components/abouts page/abounav";
import "../components/abouts page/aboutnav.css";
import MeetTheFounders from "../components/abouts page/meetTheFounders";
import VideoPlayer from "../components/abouts page/aboutvedio";
import Footer from "../components/home/footer";
import "../components/home/footer.css";
import AboutFooterhero from "../components/abouts page/aboutsfooterhero";
import "../components/abouts page/aboutsfooterhero.css";
import Abouttest from "../components/abouts page/abouttest";
import Trustcard from "../components/abouts page/trustcard";
import "../components/abouts page/trustcard.css"
export default function About() {
  return (
    <div>
      <Abounav />
      <Abouttest />
      <Trustcard/>
      <MeetTheFounders />
      <VideoPlayer />
      <AboutFooterhero />
      <Footer />
    </div>
  );
}
