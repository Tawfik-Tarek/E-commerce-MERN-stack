import React from "react";
import Service from "./Service";

const ServicesSection = () => {
    const services = [
        {
          icon: <img src="/images/icons/icon-delivery.svg" alt="Delivery"  className=" w-[2.5rem] h-[2.5rem]"/>,
          title: "FREE AND FAST DELIVERY",
          description: "Free delivery for all orders over $140",
        },
        {
          icon: <img src="/images/icons/Icon-Customer service.svg" alt="Customer Service"  className=" w-[2.5rem] h-[2.5rem]"/>,
          title: "24/7 CUSTOMER SERVICE",
          description: "Friendly 24/7 customer support",
        },
        {
          icon: <img src="/images/icons/Icon-secure.svg" alt="Secure"  className="bg-black w-[2.5rem] h-[2.5rem]"/>,
          title: "MONEY BACK GUARANTEE",
          description: "We return money within 30 days",
        },
      ];
      

  return (
    <section className="flex flex-col gap-[5.5rem] pb-[5rem]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
