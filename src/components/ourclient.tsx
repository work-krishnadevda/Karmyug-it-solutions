import React from 'react';

// Replace these with your actual client logo paths
const clients = [
  { id: 1, name: "Company One", logo: "realapplelogo.png.jpeg" },
  { id: 2, name: "Company Two", logo: "/Rcslogo.png" },

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

        {/* Swipeable Slider Container */}
        <div className="relative w-full">
          {/* Container handles the scrolling and hiding the scrollbar.
            snap-x and snap-mandatory ensure the logos snap neatly into view when swiped.
          */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-12 pb-4 pt-4 sm:justify-start lg:justify-center [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
            {clients.map((client) => (
              <div 
                key={client.id} 
                className="flex justify-center shrink-0 w-40 snap-center"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  draggable="false" // Prevents the browser's default drag behavior which can interrupt swiping
                  className="h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-grab active:cursor-grabbing"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}