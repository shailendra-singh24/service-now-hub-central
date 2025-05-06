
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, PlayCircle } from "lucide-react";

const ServiceHRSD = () => {
  const videos = [
    {
      id: "hrsd-overview",
      title: "HR Service Delivery Overview",
      description: "Learn how ServiceNow HRSD transforms employee experiences from onboarding to retirement.",
      videoUrl: "https://www.youtube.com/embed/20QUNgFIrK0",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "employee-onboarding",
      title: "Employee Onboarding",
      description: "See how ServiceNow streamlines the onboarding process for new employees.",
      videoUrl: "https://www.youtube.com/embed/HZJQsxsG3Jk",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "hr-portal-demo",
      title: "HR Service Portal Demo",
      description: "Experience the intuitive HR service portal that simplifies employee self-service.",
      videoUrl: "https://www.youtube.com/embed/9s_4wpvJfZE",
      thumbnail: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-servicenow-purple text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">HR Service Delivery</h1>
                <p className="text-xl mb-6">
                  Transform your employee experience with our comprehensive HR Service Delivery solutions powered by ServiceNow.
                </p>
                <Button asChild className="bg-bharatnow-orange hover:bg-bharatnow-orange/90 text-white">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-xl border-4 border-white/20">
                  <iframe 
                    src="https://www.youtube.com/embed/20QUNgFIrK0"
                    className="absolute inset-0 w-full h-full"
                    title="HR Service Delivery Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Learn About Our HR Service Delivery Solutions</h2>
            
            <Tabs defaultValue="hrsd-overview" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                {videos.map((video) => (
                  <TabsTrigger key={video.id} value={video.id} className="flex gap-2 items-center">
                    <PlayCircle className="h-4 w-4" />
                    {video.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {videos.map((video) => (
                <TabsContent key={video.id} value={video.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                        <iframe 
                          src={video.videoUrl}
                          className="w-full h-full"
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <h3 className="text-2xl font-bold mb-4">{video.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">{video.description}</p>
                      <Button asChild variant="outline" className="flex items-center gap-2">
                        <Link to="/contact">
                          Request a Demo <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-servicenow-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of ServiceNow HR Service Delivery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-purple">Simplified Employee Onboarding</h3>
                <p>Streamline the new hire process with automated workflows, reducing time-to-productivity.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-purple">Efficient Case Management</h3>
                <p>Automate and track employee inquiries and requests for faster resolution and improved satisfaction.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-purple">Self-Service Portal</h3>
                <p>Provide employees with a centralized hub for information, services, and support.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-purple">Document Management</h3>
                <p>Securely store and manage employee documents and records with advanced permissions and access controls.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-purple">Analytics & Reporting</h3>
                <p>Gain insights into HR service performance with comprehensive dashboards and reporting.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-purple">Compliance Management</h3>
                <p>Ensure adherence to HR policies and regulatory requirements with built-in compliance controls.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-servicenow-purple text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HR Service Delivery?</h2>
            <p className="text-xl mb-8">Contact us today to learn how our ServiceNow HRSD solutions can help your organization.</p>
            <Button asChild size="lg" className="bg-bharatnow-orange hover:bg-bharatnow-orange/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceHRSD;
