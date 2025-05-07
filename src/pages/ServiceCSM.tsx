
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, PlayCircle } from "lucide-react";

const ServiceCSM = () => {
  const videos = [
    {
      id: "csm-overview",
      title: "Customer Service Management Overview",
      description: "Learn how ServiceNow CSM helps organizations deliver exceptional customer service experiences.",
      videoUrl: "https://www.youtube.com/embed/3Pu7Am6194A",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "case-management",
      title: "Case Management",
      description: "See how ServiceNow streamlines customer case management and resolution processes.",
      videoUrl: "https://www.youtube.com/embed/23e7cd5U_LU",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "customer-portal-demo",
      title: "Customer Portal Demo",
      description: "Experience the intuitive customer portal that simplifies customer interactions and self-service.",
      videoUrl: "https://www.youtube.com/embed/2PG-_7Onfno",
      thumbnail: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-servicenow-green text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Service Management</h1>
                <p className="text-xl mb-6">
                  Deliver exceptional customer experiences with our comprehensive Customer Service Management solutions powered by ServiceNow.
                </p>
                <Button asChild className="bg-bharatnow-orange hover:bg-bharatnow-orange/90 text-white">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-xl border-4 border-white/20">
                  <iframe 
                    src="https://www.youtube.com/embed/3dk3hEovYe0"
                    className="absolute inset-0 w-full h-full"
                    title="Customer Service Management Overview"
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
            <h2 className="text-3xl font-bold mb-8 text-center">Learn About Our Customer Service Management Solutions</h2>
            
            <Tabs defaultValue="csm-overview" className="w-full">
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
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of ServiceNow Customer Service Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-green">Unified Customer Service</h3>
                <p>Deliver consistent service across all customer touchpoints, from email to social media.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-green">Automated Case Routing</h3>
                <p>Ensure customer issues reach the right teams quickly for faster resolution times.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-green">Self-Service Portal</h3>
                <p>Empower customers with a branded self-service experience to find answers and request assistance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-green">Field Service Management</h3>
                <p>Optimize scheduling and dispatch for on-site customer service with mobile capabilities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-green">Customer Insights</h3>
                <p>Gain valuable data-driven insights into customer satisfaction and service performance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-green">Proactive Service</h3>
                <p>Identify and address potential issues before they impact customers with predictive intelligence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-servicenow-green text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Service Management?</h2>
            <p className="text-xl mb-8">Contact us today to learn how our ServiceNow CSM solutions can help your organization.</p>
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

export default ServiceCSM;
