
import React from "react";
import { Calendar } from "lucide-react";

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <section className="py-16 px-4" id="timeline">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Calendar className="text-primary mr-2" />
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Our Journey Together</h2>
        </div>
        
        <div className="mt-12">
          {events.map((event, index) => (
            <div key={index} className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-dot"></div>
              <div className="ml-6 love-card mb-6 hover:-translate-y-1 text-left">
                <div className="text-sm text-primary mb-1 font-medium">{event.date}</div>
                <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
