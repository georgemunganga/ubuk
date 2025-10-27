import { Star } from "lucide-react";

interface ProfessionalCardProps {
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  distance: string;
  availability: string;
  price: number;
  skills: string[];
  image: string;
  verified: boolean;
}

const ProfessionalCard = ({
  name,
  profession,
  rating,
  distance,
  price,
  image,
}: ProfessionalCardProps) => {
  return (
    <button 
      className="group text-left w-full hover:shadow-lg transition-shadow duration-300 rounded-3xl focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={`View ${name}'s profile - ${profession} in ${distance}`}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-3xl mb-3">
        <img
          src={image}
          alt={`${name}, professional ${profession}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-lg text-xs font-semibold shadow-sm">
          {profession}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1.5 px-1 px-2 py-2">
        {/* Name and Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground text-base leading-tight group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0" aria-label={`Rating: ${rating} stars`}>
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-sm">{rating}</span>
          </div>
        </div>

        {/* Location */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {distance}
        </p>

        {/* Price */}
        <p className="text-foreground font-normal text-sm pt-1">
          <span className="font-semibold">ZMW {price}</span> /hour
        </p>
      </div>
    </button>
  );
};

export default ProfessionalCard;
