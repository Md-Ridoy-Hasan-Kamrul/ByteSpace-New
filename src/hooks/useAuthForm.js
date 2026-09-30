import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { hasErrors } from '../data/auth';

// Shared by sign-in and register: controlled fields, validation on submit, then a success toast and
// a redirect. Editing a field clears its error. There is no backend, so a valid form always succeeds.
export const useAuthForm = ({ initialValues, validate, successMessage, redirectTo }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleFieldChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const nextErrors = validate(values);
      setErrors(nextErrors);
      if (hasErrors(nextErrors)) {
        return;
      }
      toast.success(successMessage);
      navigate(redirectTo);
    },
    [navigate, redirectTo, successMessage, validate, values],
  );

  return { values, errors, handleFieldChange, handleSubmit };
};
