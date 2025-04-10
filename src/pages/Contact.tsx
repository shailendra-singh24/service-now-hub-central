
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Contact Header */}
        <div className="bg-servicenow-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Reach out to our team of ServiceNow experts to discuss your project requirements.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Content */}
        <ContactSection />
        
        {/* Map Section */}
        <div className="h-96 w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14487.066618446282!2d81.8281723!3d25.4356068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39854a0ccba2be15%3A0x7e8a5d7ade6a75c7!2sGangotri%20Nagar%2C%20Mahewa%20East%2C%20Allahabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681718946373!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
