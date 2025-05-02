
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8 text-servicenow-blue">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <p className="mb-6">Last updated: May 2, 2023</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your use of the website and services provided by BharatNow Solutions 
                ("we," "us," or "our"). By accessing our website or using our services, you agree to be bound by these Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
              <p>
                Our services are designed to assist businesses with ServiceNow implementations, integrations, and optimizations. 
                You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
              <p>
                The website and its entire contents, features, and functionality (including but not limited to all information, 
                software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) 
                are owned by BharatNow Solutions, its licensors, or other providers of such material and are protected 
                by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">User Representations</h2>
              <p>By using our services, you represent and warrant that:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You are at least 18 years of age</li>
                <li>You will comply with these Terms</li>
                <li>You will provide accurate and complete information when using our services</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
              <p>You agree not to engage in any of the following activities:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Use our services in any way that violates any applicable laws or regulations</li>
                <li>Infringe on our intellectual property rights or those of any third party</li>
                <li>Attempt to gain unauthorized access to any part of our website or systems</li>
                <li>Use our services to transmit any harmful code or malware</li>
                <li>Engage in any activity that could damage, disable, or impair our services</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Service Delivery and Payment</h2>
              <p>
                For clients engaging our professional services, specific terms regarding project scope, deliverables, 
                timeline, and payment will be defined in a separate service agreement. Payment terms and conditions, 
                including fees, expenses, and billing procedures, will be outlined in that agreement.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, BharatNow Solutions shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages resulting from your use of or inability to use 
                our services, even if we have been advised of the possibility of such damages.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
              <p>
                You agree to indemnify and hold BharatNow Solutions and its officers, directors, employees, and agents 
                harmless from any claims, liabilities, damages, losses, and expenses arising out of or in any way connected 
                with your use of our services or violation of these Terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, 
                without regard to its conflict of law principles.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
                on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
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

export default Terms;
