
import React from "react";
import { Heart } from "lucide-react";

interface HeroProps {
  name: string;
  months: number;
}

const Hero: React.FC<HeroProps> = ({ name, months }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 opacity-20">
          <Heart size={40} className="text-romance-pink animate-float" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-30">
          <Heart size={30} className="text-romance-pink animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="absolute top-40 right-1/4 opacity-20">
          <Heart size={25} className="text-romance-purple animate-float" style={{ animationDelay: "2.2s" }} />
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-30">
          <Heart size={35} className="text-romance-peach animate-float" style={{ animationDelay: "0.7s" }} />
        </div>
      </div>
      
      <div className="max-w-3xl animate-fade-in">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 text-primary">
          <span className="block">{months} Months</span>
          <span className="block mt-2">of Loving You</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
          Every moment with you has been a beautiful adventure. 
          Here's to {months} months of love, laughter, and unforgettable memories.
        </p>
        <div className="flex items-center justify-center gap-2 text-primary opacity-90">
          <Heart className="animate-pulse" />
          <span className="font-playfair text-xl">For my beloved {name}</span>
          <Heart className="animate-pulse" />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce flex flex-col items-center text-muted-foreground">
          <span className="text-sm mb-1">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
