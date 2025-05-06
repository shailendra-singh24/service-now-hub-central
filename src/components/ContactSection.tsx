
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="section-padding bg-servicenow-light" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <ContactInfo />
            
            {/* Service Links */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/services/itsm"
                  className="text-servicenow-blue hover:text-servicenow-blue/80 font-medium flex items-center"
                >
                  IT Service Management
                </Link>
                <Link 
                  to="/services/hr"
                  className="text-servicenow-purple hover:text-servicenow-purple/80 font-medium flex items-center"
                >
                  HR Service Delivery
                </Link>
                <Link 
                  to="/services/csm"
                  className="text-servicenow-green hover:text-servicenow-green/80 font-medium flex items-center"
                >
                  Customer Service Mgmt
                </Link>
                <Link 
                  to="/services/custom"
                  className="text-servicenow-teal hover:text-servicenow-teal/80 font-medium flex items-center"
                >
                  Custom Applications
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
