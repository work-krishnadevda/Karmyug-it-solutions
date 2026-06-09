import React from 'react';

// Replace these with your actual client logo paths
const clients = [
  { id: 1, name: "Company One", logo: "/realapplelogo.png.jpeg" }, // Or .jpeg, whichever is correct
  { id: 2, name: "Company Two", logo: "/public/Rcslogo.png" },
  { id: 3, name: "Company Three", logo: "/public/arynlogo.png.jpeg" }, 
  { id: 4, name: "Company Four", logo: "/public/himvedalogo.png.jpeg" },
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

        {/* Centered Logo Container */}
        <div className="relative w-full">
          {/* flex-wrap and justify-center will always perfectly center any amount of logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mx-auto max-w-4xl pt-4 pb-4">
            {clients.map((client) => (
              <div 
                key={client.id} 
                className="flex justify-center shrink-0 w-32 md:w-40"
              >
               <img
  src={client.logo}
  alt={`${client.name} logo`}
  draggable="false" 
  className="h-12 md:h-16 w-auto object-contain"
/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}