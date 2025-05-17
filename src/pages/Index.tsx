
import React from "react";
import { Heart } from "lucide-react";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import LoveNote from "../components/LoveNote";

const Index = () => {
  // Sample data - replace with your own content
  const timelineEvents = [
    {
      date: "June 24, 2023",
      title: "The Day We Met",
      description: "I'll never forget the first time our eyes met. It was the beginning of something beautiful."
    },
    {
      date: "July 10, 2023",
      title: "Our First Date",
      description: "We partied at my house. Rest is history."
    },
    {
      date: "July 17, 2023",
      title: "Made It Official",
      description: "When you said yes to being my girlfriend, I knew I was the luckiest person in the world."
    },
    {
      date: "October 17, 2023",
      title: "Start of Long Distance",
      description: "Distance may separate us, but our love only grows stronger. Every call, every message reminds me of how much I cherish you."
    },
    {
      date: "April 12, 2024",
      title: "Our First Trip Together",
      description: "Went to the water park and had the time of our lives. Every moment spent with you is a treasure."
    },
    {
      date: "May 17, 2025",
      title: "22 Months Together",
      description: "Every day with you is a blessing. Here's to many more months and years of love and joy."
    }
  ];

  const galleryImages = [
    { src: "/Img1.jpeg", alt: "first-picture", caption: "First picture together" },
    { src: "/Img2.jpeg", alt: "Dinner date", caption: "A-304 Belapur" },
    { src: "/Img3.jpeg", alt: "Hiking adventure", caption: "Blue Tokai" },
    { src: "/Img4.jpeg", alt: "Movie night", caption: "Imagica" },
    { src: "/Img5.jpeg", alt: "Birthday celebration", caption: "Mahalakshmi Nagar" },
    { src: "/Img6.jpeg", alt: "First road trip", caption: "Dream Residency" }
  ];

  const loveLetterMessage = 
`My Love,

As we celebrate 22 months together, I wanted to take a moment to tell you how much you mean to me. Every day with you is a gift that I cherish more than words can express.

You've brought so much light, love, and laughter into my life. The way you smile, the sound of your laugh, the way you see the world - everything about you fills my heart with joy.

This journey we're on together is the most beautiful adventure, and I'm so grateful to have you by my side. Thank you for your love, your patience, and for being the amazing person that you are.

I love you more with each passing day, and I can't wait to see what the future holds for us.

Forever yours,
Satyam`;

  const loveReasons = [
    "The way you smile lights up my entire world",
    "Your kindness towards everyone you meet",
    "How you always know how to make me laugh",
    "Your passion for the things you love",
    "The way you listen when I need someone to talk to",
    "Your incredible strength and resilience",
    "How you make even ordinary days feel special",
    "The way you see beauty in everything"
  ];

  return (
    <div className="min-h-screen">
      <Hero name="Simran" months={22} />
      
      <Timeline events={timelineEvents} />
      
      <Gallery images={galleryImages} />
      
      <LoveNote specialMessage={loveLetterMessage} reasons={loveReasons} />
      
      <footer className="py-8 bg-secondary/50">
        <div className="flex items-center justify-center gap-2">
          <Heart className="text-primary h-4 w-4" />
          <p className="text-sm text-muted-foreground">
            Made with love for our 22-month anniversary • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
