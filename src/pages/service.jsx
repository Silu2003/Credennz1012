import Servicenav from "../components/servicepage/servicenav";
import "../components/servicepage/servicenav.css";
import Service1 from "../components/servicepage/service1";
import "../components/servicepage/service1.css";
import Service2 from "../components/servicepage/service2";
import "../components/servicepage/service2.css";
import Footer from "../components/home/footer";
import "../components/home/footer.css";
import Footerhero from "../components/home/footerhero";
import "../components/home/footerhero.css";
import Testimonial from "../components/home/testimonial";
import "../components/home/testimonial.css";
import "../components/servicepage/service";
import Success from "../components/home/success";
import "../components/home/success.css";
import Service3 from "../components/servicepage/service3";
import "../components/servicepage/service3.css";
import Trust from "../components/home/trust";
import "../components/home/trust.css";
import Benefits from "../components/servicepage/benefits";
import "../components/servicepage/benefits.css"
import React from "react";
export default function Service() {
  return (
    <div>
      <Servicenav />
      <Trust />
      <Service3 />
      <Service1 />
      <Service2 />
      <Benefits />
      <Success />
      <Testimonial />
      <Footerhero />
      <Footer />
    </div>
  );
}
