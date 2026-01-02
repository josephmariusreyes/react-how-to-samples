import { useState } from 'react';
import { FormStatus } from '../types';

interface UseFormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void> | void;
  resetAfterSubmit?: boolean;
  resetDelay?: number;
}

export const useForm = <T extends Record<string, any>>({
  initialValues,
  onSubmit,
  resetAfterSubmit = true,
  resetDelay = 3000
}: UseFormOptions<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await onSubmit(values);
      setStatus('success');
      
      if (resetAfterSubmit) {
        setTimeout(() => {
          setStatus('idle');
          setValues(initialValues);
        }, resetDelay);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), resetDelay);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setStatus('idle');
  };

  return {
    values,
    status,
    handleChange,
    handleSubmit,
    reset,
    isSubmitting: status === 'submitting'
  };
};