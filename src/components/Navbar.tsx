
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-servicenow-blue font-bold text-xl">BharatNow Solutions</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-servicenow-blue px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-servicenow-blue px-3 py-2 rounded-md font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-servicenow-blue px-3 py-2 rounded-md font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-servicenow-blue px-3 py-2 rounded-md font-medium">
              Contact
            </Link>
            <Button variant="default" className="bg-servicenow-blue hover:bg-servicenow-blue/90 text-white ml-4">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-servicenow-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-servicenow-blue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-servicenow-blue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-servicenow-blue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-servicenow-blue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <div className="pt-2">
            <Button 
              variant="default" 
              className="w-full bg-servicenow-blue hover:bg-servicenow-blue/90 text-white"
              onClick={toggleMenu}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
