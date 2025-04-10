
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, UserSquare, Users, Cog, Settings, Server, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      id: "itsm",
      title: "IT Service Management",
      description: "Optimize your IT operations with our comprehensive ITSM solutions.",
      icon: <Database className="w-10 h-10 text-servicenow-blue" />,
      services: [
        {
          title: "Incident Management",
          description: "Streamline the process of recording, classifying, and resolving incidents.",
          icon: <Clock className="w-6 h-6 text-servicenow-blue" />
        },
        {
          title: "Problem Management",
          description: "Identify and address the root causes of recurring incidents.",
          icon: <Settings className="w-6 h-6 text-servicenow-blue" />
        },
        {
          title: "Change Management",
          description: "Implement controlled procedures for handling changes to IT infrastructure.",
          icon: <Server className="w-6 h-6 text-servicenow-blue" />
        },
        {
          title: "Service Catalog",
          description: "Create a centralized portal for requesting IT services.",
          icon: <FileText className="w-6 h-6 text-servicenow-blue" />
        }
      ]
    },
    {
      id: "hr",
      title: "HR Service Delivery",
      description: "Transform how employees engage with HR through digitized workflows.",
      icon: <UserSquare className="w-10 h-10 text-servicenow-purple" />,
      services: [
        {
          title: "Case Management",
          description: "Automate and track employee inquiries and requests.",
          icon: <FileText className="w-6 h-6 text-servicenow-purple" />
        },
        {
          title: "Employee Onboarding",
          description: "Streamline the new hire process with automated workflows.",
          icon: <Users className="w-6 h-6 text-servicenow-purple" />
        },
        {
          title: "Employee Document Management",
          description: "Securely store and manage employee documents and records.",
          icon: <Server className="w-6 h-6 text-servicenow-purple" />
        },
        {
          title: "Employee Self-Service Portal",
          description: "Provide a centralized hub for employee information and services.",
          icon: <Settings className="w-6 h-6 text-servicenow-purple" />
        }
      ]
    },
    {
      id: "csm",
      title: "Customer Service Management",
      description: "Deliver exceptional customer experiences across all touchpoints.",
      icon: <Users className="w-10 h-10 text-servicenow-green" />,
      services: [
        {
          title: "Customer Portal",
          description: "Create a branded self-service experience for your customers.",
          icon: <UserSquare className="w-6 h-6 text-servicenow-green" />
        },
        {
          title: "Case Management",
          description: "Efficiently track and resolve customer issues and requests.",
          icon: <FileText className="w-6 h-6 text-servicenow-green" />
        },
        {
          title: "Omni-Channel Support",
          description: "Provide consistent service across email, phone, chat, and social media.",
          icon: <Settings className="w-6 h-6 text-servicenow-green" />
        },
        {
          title: "Field Service Management",
          description: "Optimize scheduling and dispatch for on-site customer service.",
          icon: <Clock className="w-6 h-6 text-servicenow-green" />
        }
      ]
    },
    {
      id: "custom",
      title: "Custom Implementations",
      description: "Tailored ServiceNow solutions designed specifically for your business needs.",
      icon: <Cog className="w-10 h-10 text-servicenow-teal" />,
      services: [
        {
          title: "Custom App Development",
          description: "Design and build custom applications on the ServiceNow platform.",
          icon: <Settings className="w-6 h-6 text-servicenow-teal" />
        },
        {
          title: "Integration Services",
          description: "Connect ServiceNow with your existing systems and applications.",
          icon: <Server className="w-6 h-6 text-servicenow-teal" />
        },
        {
          title: "Workflow Automation",
          description: "Automate complex business processes across departments.",
          icon: <Clock className="w-6 h-6 text-servicenow-teal" />
        },
        {
          title: "Performance Optimization",
          description: "Tune and optimize your ServiceNow implementation for better performance.",
          icon: <Database className="w-6 h-6 text-servicenow-teal" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Services Header */}
        <div className="bg-servicenow-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our ServiceNow Services</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Comprehensive ServiceNow implementation and support services to streamline your business operations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Services Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {serviceCategories.map((category) => (
            <div key={category.id} className="mb-16" id={category.id}>
              <div className="flex items-center mb-8">
                <div className="mr-4 transition-transform duration-300 hover:scale-110">{category.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground text-lg">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, index) => (
                  <Card key={index} className="card-hover transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="transition-transform duration-300 hover:scale-110 hover:rotate-6">
                        {service.icon}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="bg-servicenow-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Contact us today to learn how our ServiceNow solutions can transform your business.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-bharatnow-orange text-white hover:bg-bharatnow-orange/90 h-12 px-8 py-3 text-lg shadow-lg"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
