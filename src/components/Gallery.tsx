
import React from "react";
import { Image } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="py-16 px-4 bg-secondary/50" id="gallery">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Image className="text-primary mr-2" />
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Our Favorite Moments</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[4/4] relative">
                {/* This would be used for real images */}
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {image.caption && (
                <div className="p-4 bg-white">
                  <p className="text-center text-muted-foreground">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
