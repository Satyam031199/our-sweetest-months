
import React from "react";
import MessageCard from "./MessageCard";
import { Heart } from "lucide-react";

interface LoveNoteProps {
  specialMessage: string;
  reasons: string[];
}

const LoveNote: React.FC<LoveNoteProps> = ({ specialMessage, reasons }) => {
  return (
    <section className="py-16 px-4" id="note">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Heart className="text-primary mr-2" />
          <h2 className="text-3xl md:text-4xl font-semibold text-center">From My Heart to Yours</h2>
        </div>
        
        <div className="mb-12 animate-fade-in">
          <MessageCard
            title="My Love Letter to You"
            message={specialMessage}
          />
        </div>
        
        <h3 className="text-2xl font-playfair mb-8">Reasons Why I Love You</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="love-card flex items-start text-left animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-romance-pink h-8 w-8 rounded-full flex items-center justify-center mr-4 shrink-0 mt-1">
                <span className="text-primary font-medium">{index + 1}</span>
              </div>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNote;
