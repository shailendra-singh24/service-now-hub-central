
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8 text-servicenow-blue">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="mb-6">Last updated: May 2, 2023</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                BharatNow Solutions ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our ServiceNow consulting services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Fill out forms on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information about our services</li>
                <li>Contact us via email or phone</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>The personal information we collect may include:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Job title</li>
                <li>Information about your business and ServiceNow requirements</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you about our services, updates, and other information</li>
                <li>Process transactions and send related information</li>
                <li>Find and prevent fraud</li>
                <li>For internal administrative and auditing purposes</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies and similar tracking technologies to track activity on our website and store certain information. 
                Cookies are files with small amounts of data that may include an anonymous unique identifier. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. 
                However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide 
                you with advance notice. This does not include trusted third parties who assist us in operating our website, 
                conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>The right to access the personal information we have about you</li>
                <li>The right to rectify inaccurate personal information</li>
                <li>The right to request erasure of your personal information</li>
                <li>The right to restrict or object to our processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:info@bharatnowsolutions.com" className="text-servicenow-blue hover:underline">
                  info@bharatnowsolutions.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
