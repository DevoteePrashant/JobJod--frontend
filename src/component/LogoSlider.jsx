import React from "react";
import Marquee from "react-fast-marquee";

const LogoSlider = ({ direction = "right", speed = 50 }) => {
  // Sample company data - replace with your actual data
  const companies = [
    {
      name: "Airplane",
      logo: "/placeholder.svg"
    },
    {
      name: "Railway",
      logo: "/placeholder.svg"
    },
    {
      name: "Resend",
      logo: "/placeholder.svg"
    },
    {
      name: "CodeSendBox",
      logo: "/placeholder.svg"
    },
    {
      name: "Clerk",
      logo: "/placeholder.svg"
    },
    {
      name: "Inngest",
      logo: "/placeholder.svg"
    },
    {
      name: "Crowddev",
      logo: "/placeholder.svg"
    },
    {
      name: "Airplane",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <section className="w-full py-12 bg-white relative overflow-hidden">
      <div className="relative">
        {/* Left fade effect */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
        
        <Marquee play={true} direction={direction} speed={speed} gradient={false}>
          {/* Double the array to ensure smooth infinite scroll */}
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`company-${index}`}
              className="mx-8 flex flex-col items-center justify-center gap-3"
            >
              <div className="grayscale hover:grayscale-0 transition-all duration-200">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Right fade effect */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

export default LogoSlider;
