
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, PlayCircle } from "lucide-react";

const ServiceITSM = () => {
  const videos = [
    {
      id: "itsm-overview",
      title: "ITSM Overview",
      description: "An introduction to ServiceNow IT Service Management and how it transforms IT operations.",
      videoUrl: "https://www.youtube.com/embed/lHz42TvGPGw",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "incident-mgmt",
      title: "Incident Management",
      description: "Learn how ServiceNow helps you quickly resolve IT incidents and minimize business impact.",
      videoUrl: "https://www.youtube.com/embed/HJ0B3BKEZ-s",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "service-portal",
      title: "Service Portal Demo",
      description: "See how the ServiceNow Service Portal provides a seamless self-service experience for users.",
      videoUrl: "https://www.youtube.com/embed/ehv-Z-mGVMY",
      thumbnail: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-servicenow-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">IT Service Management</h1>
                <p className="text-xl mb-6">
                  Transform your IT service delivery with our comprehensive ITSM solutions powered by ServiceNow.
                </p>
                <Button asChild className="bg-bharatnow-orange hover:bg-bharatnow-orange/90 text-white">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-xl border-4 border-white/20">
                  <iframe 
                    src="https://www.youtube.com/embed/lHz42TvGPGw"
                    className="absolute inset-0 w-full h-full"
                    title="ITSM Overview"
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
            <h2 className="text-3xl font-bold mb-8 text-center">Learn About Our ITSM Solutions</h2>
            
            <Tabs defaultValue="itsm-overview" className="w-full">
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
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of ServiceNow ITSM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-blue">Streamlined Workflows</h3>
                <p>Automate and optimize IT processes to reduce manual effort and improve service delivery.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-blue">Enhanced User Experience</h3>
                <p>Provide intuitive self-service options and faster resolution times for better user satisfaction.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-blue">Actionable Insights</h3>
                <p>Gain valuable data-driven insights to continually improve your IT service management processes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-blue">Cost Reduction</h3>
                <p>Lower operational costs through automation, prevention of major incidents, and optimized resource allocation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-blue">Improved Compliance</h3>
                <p>Ensure adherence to industry standards and regulatory requirements with built-in compliance controls.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-servicenow-blue">Faster Resolution</h3>
                <p>Reduce incident resolution times through streamlined processes and better cross-team collaboration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-servicenow-blue text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Service Management?</h2>
            <p className="text-xl mb-8">Contact us today to learn how our ServiceNow ITSM solutions can help your organization.</p>
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

export default ServiceITSM;
