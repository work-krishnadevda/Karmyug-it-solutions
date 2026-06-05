import React from 'react';

// Replace these with your actual client logo paths
const clients = [
  { id: 1, name: "Company One", logo: "/client-1.png" },
  { id: 2, name: "Company Two", logo: "/client-2.png" },
  { id: 3, name: "Company Three", logo: "/client-3.png" },
  { id: 4, name: "Company Four", logo: "/client-4.png" },
  { id: 5, name: "Company Five", logo: "/client-5.png" },
  { id: 6, name: "Company Six", logo: "/client-6.png" },
];

export default function OurClients() {
  return (
    // WHITE background
    <section className="py-20 bg-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* BLACK heading */}
          <h2 className="text-4xl font-extrabold text-black tracking-tight sm:text-5xl">
            Trusted by Industry Leaders
          </h2>
          
          {/* RED, YELLOW, GREEN, and BLUE brand accent line */}
          <div className="flex justify-center gap-2 mt-6 mb-6">
            <div className="h-1.5 w-10 bg-red-600 rounded-full"></div>
            <div className="h-1.5 w-10 bg-yellow-400 rounded-full"></div>
            <div className="h-1.5 w-10 bg-green-500 rounded-full"></div>
            <div className="h-1.5 w-10 bg-blue-600 rounded-full"></div>
          </div>

          <p className="text-xl text-black/70 max-w-2xl mx-auto font-medium">
            We are proud to partner with these amazing organizations.
          </p>
        </div>

        {/* Responsive Logo Grid */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-16 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.id} className="flex justify-center w-full">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                // Logos stay grayscale until hovered
                className="h-14 w-auto shrink-0 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}