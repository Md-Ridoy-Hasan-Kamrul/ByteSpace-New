import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { NEWSLETTER_SUCCESS } from '../components/home/homeData';
import { getNewsletterEmailError } from '../components/home/validateNewsletterEmail';

export const useNewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
    setError('');
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const nextError = getNewsletterEmailError(email);
      setError(nextError);
      if (nextError) {
        return;
      }
      setIsSubscribed(true);
      toast.success(NEWSLETTER_SUCCESS);
    },
    [email],
  );

  return { email, error, isSubscribed, handleEmailChange, handleSubmit };
};
