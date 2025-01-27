import React from "react";

const services = [
  {
    id: 1,
    title: "Web-Development",
    description:
      "Web development is the process of building and maintaining websites or web applications using technologies.",
  },
  {
    id: 2,
    title: "Responsive Web-applications",
    description:
      "Responsive web applications adapt their layout and functionality to provide an optimal user experience across different devices and screen sizes.",
  },
  {
    id: 3,
    title: "Frontend Development",
    description:
      "Frontend development focuses on building the visual and interactive aspects of a website or web application using technologies.",
  },
  {
    id: 4,
    title: "Database Management",
    description:
      "SQL and Firebase are database solutions; SQL is a structured relational database, while Firebase is a cloud-based NoSQL database for real-time data sync",
  },
  {
    id: 5,
    title: "Full Stack Development",
    description:
      "Full stack development using Firebase involves building both the frontend and backend of web applications, leveraging Firebase's cloud-based services for authentication, database, hosting, and serverless functions.",
  },
];

const Services = () => {
    return (
      <div className="bg-black text-white py-12" id="services">
        <div className="mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl text-center font-bold mb-12">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                  {service.id}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-400">{service.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-green-400 hover:text-blue-500"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  
