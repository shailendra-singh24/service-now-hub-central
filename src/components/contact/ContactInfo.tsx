
import { Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
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
  );
};

export default ContactInfo;
