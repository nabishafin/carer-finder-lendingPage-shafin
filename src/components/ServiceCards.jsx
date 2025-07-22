"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Domestic Cleaner",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Carer",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Nurse",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function ServiceCards() {
  const [activeCard, setActiveCard] = useState(2); // Default to middle card (Carer)

  // Function to reorder cards so active card is in the middle
  const getOrderedCards = () => {
    const activeIndex = services.findIndex(
      (service) => service.id === activeCard
    );
    const orderedCards = [...services];

    // Move active card to middle position (index 1)
    if (activeIndex !== 1) {
      const activeService = orderedCards.splice(activeIndex, 1)[0];
      orderedCards.splice(1, 0, activeService);
    }

    return orderedCards;
  };

  const handleDotClick = (serviceId) => {
    setActiveCard(serviceId);
  };

  const handleCardClick = (serviceId) => {
    setActiveCard(serviceId);
  };

  const orderedCards = getOrderedCards();

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="flex items-center justify-center gap-4 mb-8 min-h-[280px]">
        {orderedCards.map((service, index) => {
          const isActive = service.id === activeCard;
          const isMiddle = index === 1;

          return (
            <Card
              key={service.id}
              className={cn(
                "cursor-pointer transition-all duration-700 ease-in-out overflow-hidden transform-gpu",
                "hover:shadow-lg",
                isActive && isMiddle
                  ? "w-80 h-64 scale-110 z-20 shadow-2xl ring-2 ring-cyan-400 ring-opacity-50"
                  : "w-64 h-48 scale-95 opacity-75 hover:opacity-90 hover:scale-100"
              )}
              onClick={() => handleCardClick(service.id)}
              style={{
                transform:
                  isActive && isMiddle
                    ? "translateY(-10px) scale(1.1)"
                    : undefined,
              }}
            >
              <CardContent className="p-0 relative h-full">
                <div
                  className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-end justify-start p-6 relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.8), rgba(37, 99, 235, 0.8)), url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3
                    className={cn(
                      "text-white font-semibold transition-all duration-300",
                      isActive && isMiddle ? "text-2xl" : "text-xl"
                    )}
                  >
                    {service.title}
                  </h3>
                  {isActive && isMiddle && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse" />
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Indicator dots - maintain original order */}
      <div className="flex justify-center gap-3">
        {services.map((service) => (
          <button
            key={service.id}
            className={cn(
              "transition-all duration-500 rounded-full border-2 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50",
              activeCard === service.id
                ? "w-4 h-4 bg-cyan-500 border-cyan-500 scale-125 shadow-lg"
                : "w-3 h-3 bg-gray-300 border-gray-300 hover:bg-cyan-300 hover:border-cyan-300"
            )}
            onClick={() => handleDotClick(service.id)}
            aria-label={`Select ${service.title}`}
          />
        ))}
      </div>
    </div>
  );
}
