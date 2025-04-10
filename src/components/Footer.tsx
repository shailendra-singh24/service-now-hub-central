
import { Link } from "react-router-dom";
import { Image } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-servicenow-dark text-white">
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-1 rounded-md hover:scale-110 transition-transform duration-300">
                <Image className="h-8 w-8 text-bharatnow-orange" />
              </div>
              <h2 className="text-xl font-bold">BharatNow Solutions</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Delivering exceptional ServiceNow solutions to transform your business processes.
            </p>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/itsm" className="text-gray-300 hover:text-white transition-colors duration-300">IT Service Management</Link></li>
              <li><Link to="/services/hr" className="text-gray-300 hover:text-white transition-colors duration-300">HR Service Delivery</Link></li>
              <li><Link to="/services/csm" className="text-gray-300 hover:text-white transition-colors duration-300">Customer Service Management</Link></li>
              <li><Link to="/services/custom" className="text-gray-300 hover:text-white transition-colors duration-300">Custom Implementations</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p>Gangotri Nagar, Mahewa East</p>
              <p>Prayagraj</p>
              <p className="mt-2">info@bharatnowsolutions.com</p>
              <p>+917388939531</p>
            </address>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} BharatNow Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
