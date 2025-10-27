import { MapPin, Star, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
  reviews,
  distance,
  availability,
  price,
  skills,
  image,
  verified,
}: ProfessionalCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {verified && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" />
              Verified
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="font-bold text-lg text-foreground mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{profession}</p>
          </div>

          {/* Rating and Location */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold">{rating}</span>
              <span className="text-muted-foreground">({reviews})</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{distance}</span>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{availability}</span>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{skills.length - 3} more
              </Badge>
            )}
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground">From</p>
              <p className="text-lg font-bold text-primary">ZMW {price}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                View Profile
              </Button>
              <Button size="sm">Book Now</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalCard;
