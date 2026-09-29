import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ROUTES } from '../config';
import { EMPTY_SIGN_IN, SIGN_IN_SUCCESS } from '../components/sign-in/signInCopy';
import { hasSignInErrors, validateSignInForm } from '../components/sign-in/validateSignInForm';

export const useSignInForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(EMPTY_SIGN_IN);
  const [errors, setErrors] = useState({});

  const handleFieldChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  }, []);

  const finishSignIn = useCallback(() => {
    toast.success(SIGN_IN_SUCCESS);
    navigate(ROUTES.HOME);
  }, [navigate]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const nextErrors = validateSignInForm(values);
      setErrors(nextErrors);
      if (hasSignInErrors(nextErrors)) {
        return;
      }
      finishSignIn();
    },
    [finishSignIn, values],
  );

  return { values, errors, handleFieldChange, handleSubmit };
};
