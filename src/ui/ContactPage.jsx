import React from 'react';
import ContactFormWithValidation from './ContactFormWithValidation';
import ContactInfo from './ContactInfo';

function ContactPage() {
  return (
    <div  id='contact'  className="text-white py-8" style={{ backgroundColor: "#0c0d11" }}>
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#6961ff" }}>
            Get In Touch
          </h1>
          <p className="text-gray-400">
            Feel free to reach out for collaboration, opportunities, or just to say hello!
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ContactInfo />
          <ContactFormWithValidation />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;