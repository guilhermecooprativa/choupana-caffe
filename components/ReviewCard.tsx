"use client";

import { Star } from "lucide-react";

interface ReviewCardProps {
  avatar: string;
  name: string;
  rating: number;
  review: string;
  date?: string;
}

const ReviewCard = ({ avatar, name, rating, review, date }: ReviewCardProps) => (
  <div className="w-80 p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border-2 border-amber-200"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
        <div className="flex gap-1 items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">{rating}/5</span>
        </div>
      </div>
    </div>
    <p className="text-gray-700 text-sm leading-relaxed mb-3">"{review}"</p>
    {date && (
      <div className="text-xs text-gray-500 text-right">{date}</div>
    )}
  </div>
);

export default ReviewCard;
