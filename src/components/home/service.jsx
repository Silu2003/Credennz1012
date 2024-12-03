import React from "react";
import "./service.css";
 
const ServiceItem = ({ title, description, className }) => (
  <div className={`service-item ${className}`}>
    <div className="service-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);
 
export default function Service() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications tailored to your business needs, built with the latest technologies and best practices.Custom web applications tailored to your business needs, built with the latest technologies and best practicesCustom web applications tailored to your business needs, built with the latest technologies and best practicesCustom web applications tailored to your business needs, built with the latest technologies and best practicesCustom web applications tailored to your business needs, built with the latest technologies and best practices",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that deliver seamless user experiences across all devices.",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that enhances usability and creates visually appealing interfaces for your digital products.",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure setup and management to support your growing business needs.",
    },
    {
      title: "Data Analytics",
      description: "Comprehensive data analysis and visualization to help you make informed business decisions.",
    },
  ];
 
  return (
    <section className="p-container">
      <h6>WHAT WE DO</h6>
      <h1>Our Services</h1>
      <div className="services-wrapper">
        <div className="services-01">
          <ServiceItem
            className="service-up-01"
            title={services[0].title}
            description={services[0].description}
          />
          <ServiceItem
            className="service-up"
            title={services[1].title}
            description={services[1].description}
          />
        </div>
        <div className="services-02">
          {services.slice(2).map((service, index) => (
            <ServiceItem
              key={index}
              className="service-down"
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}