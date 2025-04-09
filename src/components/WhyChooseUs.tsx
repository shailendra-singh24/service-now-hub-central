
import { Check } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Certified Expertise",
      description: "Our team consists of ServiceNow certified professionals with extensive implementation experience."
    },
    {
      title: "End-to-End Solutions",
      description: "From planning to implementation and ongoing support, we provide complete ServiceNow solutions."
    },
    {
      title: "Rapid Deployment",
      description: "Accelerate your digital transformation with our efficient implementation methodologies."
    },
    {
      title: "Custom Approach",
      description: "We tailor ServiceNow to your specific business needs rather than forcing you into predefined templates."
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our ServiceNow Services</h2>
            <p className="text-lg text-muted-foreground mb-8">
              With years of ServiceNow implementation experience, we've helped organizations of all sizes transform their business operations.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-servicenow-green" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team working on ServiceNow implementation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-servicenow-dark/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-semibold">
                    "Their ServiceNow implementation exceeded our expectations and transformed our IT operations."
                  </p>
                  <p className="text-white/80 mt-2">
                    — CIO, Fortune 500 Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
