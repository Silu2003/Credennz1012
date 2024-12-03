import React from "react";

import Footer from "../components/home/footer";
import "../components/home/footer.css";
import Footerhero from "../components/home/footerhero";
import "../components/home/footerhero.css";
import Faq from "../components/home/faq";
import "../components/home/faq.css";
import Testimonial from "../components/home/testimonial";
import "../components/home/testimonial.css";
import Blogs from "../components/home/blogs";
import "../components/home/blogs.css";
import Success from "../components/home/success";
import "../components/home/success.css";
import Process from "../components/home/process";
import "../components/home/process.css";
import Service from "../components/home/service";
import "../components/home/service.css";
import Trusthero from "../components/home/trusthero";
import "../components/home/trusthero.css";
import Trust from "../components/home/trust";
import "../components/home/trust.css";
import Nav from "../components/home/nav";
import "../components/home/nav.css";

export default function Home() {
  return (
    <div>
      <Nav />
      <Trust />
      <Trusthero />
      <Service />
      <Process />
      <Success />
      <Blogs />
      <Testimonial />
      <Faq />
      <Footerhero />
      <Footer />
    </div>
  );
}
