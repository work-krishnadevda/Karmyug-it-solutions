import React from 'react';

// Added custom colors and scale values to the array for individual control
const clients = [
  { 
    id: 1, 
    name: "Company One", 
    logo: "/realapplelogo.png.jpeg", 
    colorEffects: "hover:border-red-500 hover:shadow-red-500/40 active:border-red-500 active:shadow-red-500/40",
    imageScale: "scale-100" 
  },
  { 
    id: 2, 
    name: "Company Two", 
    logo: "/Rcslogo.png", 
    colorEffects: "hover:border-yellow-400 hover:shadow-yellow-400/40 active:border-yellow-400 active:shadow-yellow-400/40",
    imageScale: "scale-100" 
  },
  { 
    id: 3, 
    name: "Company Three", 
    logo: "/arynlogo.png.jpeg", 
    colorEffects: "hover:border-blue-500 hover:shadow-blue-500/40 active:border-blue-500 active:shadow-blue-500/40",
    imageScale: "scale-125 md:scale-150" 
  }, 
  { 
    id: 4, 
    name: "Company Four", 
    logo: "/himvedalogo.png.jpeg", 
    colorEffects: "hover:border-green-500 hover:shadow-green-500/40 active:border-green-500 active:shadow-green-500/40",
    imageScale: "scale-125 md:scale-150" 
  },
];

export default function OurClients() {
  return (
    <section className="py-20 bg-gray-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black tracking-tight sm:text-5xl">
            Trusted by Industry Leaders
          </h2>
          
          {/* Brand accent line */}
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
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mx-auto max-w-4xl pt-4 pb-4">
            {clients.map((client) => (
              <div 
                key={client.id} 
                // ADDED: overflow-hidden to ensure the square image corners don't bleed out of the rounded circle
                className={`group flex justify-center items-center shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full overflow-hidden border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:shadow-lg ${client.colorEffects}`}
              >
               <img
                 src={client.logo}
                 alt={`${client.name} logo`}
                 draggable="false" 
                 className={`w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-300 group-hover:scale-[1.15] group-active:scale-[1.15] ${client.imageScale}`}
               />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}