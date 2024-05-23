import Heading from "../../ui/Heading";

const services = [
  {
    title: "Rapid Assessment and Response",
    details: [
      "Situation Analysis: Immediately after a disaster, our team conducts a comprehensive assessment to understand the scope and scale of the impact on community health and medical infrastructure.",
      "Priority Identification: We identify the most urgent health needs and gaps in medical supplies to ensure a targeted response.",
    ],
  },
  {
    title: "Coordination with Stakeholders",
    details: [
      "Partnerships: We work closely with local health authorities, international NGOs, and other stakeholders to coordinate efforts and resources.",
      "Information Sharing: Facilitate real-time information exchange among all partners to optimize response efforts and avoid duplication.",
    ],
  },
  {
    title: "Supply Chain Management",
    details: [
      "Logistics: Efficiently manage the procurement, transportation, and distribution of medical supplies to ensure they reach the affected areas promptly.",
      "Inventory Tracking: Implement advanced tracking systems to monitor the availability and location of critical supplies.",
    ],
  },
  {
    title: "Community Health Support",
    details: [
      "Medical Services: Deploy mobile health units and temporary clinics to provide immediate medical care, including trauma care, disease prevention, and chronic disease management.",
      "Public Health Interventions: Conduct vaccination campaigns, sanitation initiatives, and health education programs to prevent disease outbreaks and promote health.",
    ],
  },
  {
    title: "Technology Integration",
    details: [
      "Digital Platforms: Utilize cutting-edge technology to create a centralized platform for tracking health data, supply chain logistics, and resource allocation.",
      "Telemedicine: Provide telemedicine services to offer remote consultations and support, ensuring continued care despite physical barriers.",
    ],
  },
  {
    title: "Capacity Building",
    details: [
      "Training Programs: Offer training for local healthcare workers on disaster response, emergency medical care, and effective supply chain management.",
      "Community Engagement: Educate and empower community members to participate in health promotion and emergency preparedness activities.",
    ],
  },
  {
    title: "Sustainable Recovery and Resilience",
    details: [
      "Long-term Planning: Support communities in developing sustainable healthcare infrastructure and disaster preparedness plans.",
      "Resilience Building: Focus on building local capacities to enhance resilience against future disasters through continuous support and resources.",
    ],
  },
  {
    title: "Research and Innovation",
    details: [
      "Data Collection: Conduct research to gather data on disaster impacts, response efficacy, and community health outcomes.",
      "Innovative Solutions: Invest in developing and implementing innovative solutions to improve disaster response and health outcomes.",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from-[#401D3E] via-[#428993] to-[#DE76A3]">
      <div className="max-w-[1440px] mx-auto md:px-10 px-5">
        <Heading title="What We Do" />
        <div className="grid md:gap-8 gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white md:p-6 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#0076b6]">
                {service.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="mb-2">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
