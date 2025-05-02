
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="section-padding bg-servicenow-light" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your business with ServiceNow? Contact us today to discuss your requirements and how we can help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-3 text-servicenow-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Our Office</h3>
                  <p className="text-muted-foreground">Gangotri Nagar, Mahewa East, Prayagraj</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 text-servicenow-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@bharatnowsolutions.com" className="hover:text-servicenow-blue transition-colors duration-300 flex items-center">
                      <Mail className="w-4 h-4 mr-1 inline" />
                      info@bharatnowsolutions.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 text-servicenow-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-muted-foreground">+917388939531</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="hover:border-bharatnow-orange focus:border-bharatnow-orange transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="hover:border-bharatnow-orange focus:border-bharatnow-orange transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="hover:border-bharatnow-orange focus:border-bharatnow-orange transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="hover:border-bharatnow-orange focus:border-bharatnow-orange transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="hover:border-bharatnow-orange focus:border-bharatnow-orange transition-colors duration-300"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-bharatnow-orange hover:bg-bharatnow-orange/90 hover:scale-105 transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
