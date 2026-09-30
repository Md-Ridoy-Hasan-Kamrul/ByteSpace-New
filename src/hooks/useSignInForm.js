import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ROUTES } from '../config';
import { EMPTY_SIGN_IN, SIGN_IN_SUCCESS } from '../components/sign-in/signInCopy';
import { validateSignInForm } from '../components/sign-in/validateSignInForm';
import { hasErrors } from '../utils/validation';
import { useFormFields } from './useFormFields';

export const useSignInForm = () => {
  const navigate = useNavigate();
  const { values, errors, setErrors, handleFieldChange } = useFormFields(EMPTY_SIGN_IN);

  const finishSignIn = useCallback(() => {
    toast.success(SIGN_IN_SUCCESS);
    navigate(ROUTES.HOME);
  }, [navigate]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const nextErrors = validateSignInForm(values);
      setErrors(nextErrors);
      if (hasErrors(nextErrors)) {
        return;
      }
      finishSignIn();
    },
    [finishSignIn, setErrors, values],
  );

  return { values, errors, handleFieldChange, handleSubmit };
};
