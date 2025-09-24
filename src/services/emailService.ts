// src/services/emailService.ts
import emailjs from '@emailjs/browser';

// Define the email result type
interface EmailResult {
  success: boolean;
  status?: number;
  error?: string;
}

// EmailJS Configuration
const EMAILJS_CONFIG = {
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

export const sendContactEmail = async (formData: { 
  from_name: string; 
  from_email: string; 
  message: string 
}): Promise<EmailResult> => {
  try {
    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      message: formData.message,
      to_email: 'dulakshikeshani288@gmail.com'
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    return { 
      success: true, 
      status: response.status 
    };
  } catch (error: unknown) { // Fixed: Use 'unknown' instead of custom interface
    console.error('Email send error:', error);
    
    // Type guard to safely access error properties
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object' && 'text' in error) {
      errorMessage = (error as { text?: string }).text || 'Email send failed';
    }
    
    return { 
      success: false, 
      error: errorMessage 
    };
  }
};

export default EMAILJS_CONFIG;