
import React from "react";
import { Heart } from "lucide-react";

interface MessageCardProps {
  title: string;
  message: string;
}

const MessageCard: React.FC<MessageCardProps> = ({ title, message }) => {
  return (
    <div className="love-card max-w-2xl mx-auto bg-white bg-opacity-90 hover:bg-opacity-100 text-left">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-medium">{title}</h3>
        <Heart className="text-primary h-5 w-5" />
      </div>
      <p className="whitespace-pre-line text-muted-foreground">{message}</p>
    </div>
  );
};

export default MessageCard;
