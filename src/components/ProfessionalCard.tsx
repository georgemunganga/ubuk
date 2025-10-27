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
    <button className="group text-left w-full">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badge */}
        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-lg text-xs font-semibold shadow-sm">
          {profession}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        {/* Name and Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground text-base leading-tight">
            {name}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
            <span className="font-semibold text-sm">{rating}</span>
          </div>
        </div>

        {/* Location */}
        <p className="text-muted-foreground text-sm">
          {distance}
        </p>

        {/* Price */}
        <p className="text-foreground font-normal text-sm pt-1">
          <span className="font-semibold">ZMW {price}</span> hour
        </p>
      </div>
    </button>
  );
};

export default ProfessionalCard;
