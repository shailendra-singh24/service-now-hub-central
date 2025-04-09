
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-bharatnow-orange to-bharatnow-green text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Transform Your Business with BharatNow Solutions
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Expert implementation, customization, and support for ServiceNow ITSM, HR Service Delivery, and CSM platforms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-bharatnow-orange hover:bg-white/90"
                asChild
              >
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="ServiceNow Platform" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
