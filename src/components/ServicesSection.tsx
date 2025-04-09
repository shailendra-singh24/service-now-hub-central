
import ServiceCard from "./ServiceCard";
import { Database, UserSquare, Users, Cog } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "IT Service Management",
      description: "Streamline IT operations with our ITSM implementation services. Automate workflows, manage incidents, and enhance service delivery.",
      icon: <Database className="w-8 h-8 text-white" />,
      linkUrl: "/services/itsm",
      color: "bg-bharatnow-orange"
    },
    {
      title: "HR Service Delivery",
      description: "Transform HR operations with ServiceNow. Simplify case management, employee onboarding, and HR service delivery.",
      icon: <UserSquare className="w-8 h-8 text-white" />,
      linkUrl: "/services/hr",
      color: "bg-bharatnow-green"
    },
    {
      title: "Customer Service Management",
      description: "Elevate customer satisfaction with ServiceNow CSM. Create seamless customer experiences across all touchpoints.",
      icon: <Users className="w-8 h-8 text-white" />,
      linkUrl: "/services/csm",
      color: "bg-bharatnow-orange"
    },
    {
      title: "Custom Implementations",
      description: "Tailored ServiceNow solutions designed for your unique business needs. Custom apps, integrations, and workflows.",
      icon: <Cog className="w-8 h-8 text-white" />,
      linkUrl: "/services/custom",
      color: "bg-bharatnow-green"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our ServiceNow Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive ServiceNow implementation and support services to optimize your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              linkUrl={service.linkUrl}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
