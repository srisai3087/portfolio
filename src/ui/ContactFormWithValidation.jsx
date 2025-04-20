import React, { useState } from 'react';

function ContactFormWithValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form validation
  const validateForm = (data) => {
    const errors = {};
    
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!data.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    
    return errors;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error for this field if it exists
    if (formErrors[id]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted with data:", formData);
        
        // Show success message
        setSubmitSuccess(true);
        setIsSubmitting(false);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1000);
    } else {
      // Set errors
      setFormErrors(errors);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-600 bg-opacity-20 border border-green-600 rounded-md text-green-500">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Name Input */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
            <input 
              type="text" 
              id="name" 
              className={`w-full p-3 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formErrors.name ? 'border-red-500' : 'border-gray-700'
              }`}
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
            )}
          </div>
          
          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
            <input 
              type="email" 
              id="email" 
              className={`w-full p-3 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formErrors.email ? 'border-red-500' : 'border-gray-700'
              }`}
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>
        </div>
        
        {/* Subject Input */}
        <div className="mb-4 space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
          <input 
            type="text" 
            id="subject" 
            className={`w-full p-3 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formErrors.subject ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="Project Inquiry"
            value={formData.subject}
            onChange={handleInputChange}
          />
          {formErrors.subject && (
            <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
          )}
        </div>
        
        {/* Message Input */}
        <div className="mb-6 space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
          <textarea 
            id="message" 
            rows={5} 
            className={`w-full p-3 bg-gray-700 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formErrors.message ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="Hello! I'd like to discuss a project..."
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {formErrors.message && (
            <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
          )}
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit"
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md flex items-center gap-2 transition-colors duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-pulse">Sending...</span>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </>
          ) : (
            <>
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactFormWithValidation;