
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkUrl: string;
  color: string;
}

const ServiceCard = ({ title, description, icon, linkUrl, color }: ServiceCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader>
        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${color}`}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to={linkUrl}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
