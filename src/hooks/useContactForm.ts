import { useState } from 'react';
import { sendContactEmail } from '../services/emailService';

// Define the form data interface
interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

// Define possible status types
type FormStatus = 'success' | 'error' | null;

// Event handler type for inputs
type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

// Submit handler type
type SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => Promise<void>;

// Reset handler type
type ResetHandler = () => void;

// Return type for the hook
interface UseContactFormReturn {
  formData: FormData;
  status: FormStatus;
  loading: boolean;
  handleInputChange: InputChangeHandler;
  handleSubmit: SubmitHandler;
  resetForm: ResetHandler;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange: InputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit: SubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
    } else {
      setStatus('error');
    }

    setLoading(false);
  };

  const resetForm: ResetHandler = () => {
    setFormData({ from_name: '', from_email: '', message: '' });
    setStatus(null);
  };

  return {
    formData,
    status,
    loading,
    handleInputChange,
    handleSubmit,
    resetForm
  };
};