import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ROUTES } from '../config';
import {
  EMPTY_REGISTER_ACCOUNT,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from '../components/register/registerCopy';
import { submitRegistration } from '../components/register/submitRegistration';
import {
  hasRegisterErrors,
  validateRegisterForm,
} from '../components/register/validateRegisterForm';

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(EMPTY_REGISTER_ACCOUNT);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '', form: '' }));
  }, []);

  const finishRegistration = useCallback(() => {
    toast.success(REGISTER_SUCCESS);
    navigate(ROUTES.SIGN_IN);
  }, [navigate]);

  const applyRegistrationResult = useCallback(
    (result) => {
      if (!result.ok) {
        setErrors({ form: result.message });
        return;
      }
      finishRegistration();
    },
    [finishRegistration],
  );

  const completeRegistration = useCallback(
    async (account) => {
      setIsSubmitting(true);
      try {
        const result = await submitRegistration(account);
        applyRegistrationResult(result);
      } catch {
        applyRegistrationResult({ ok: false, message: REGISTER_FAILED });
      } finally {
        setIsSubmitting(false);
      }
    },
    [applyRegistrationResult],
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const nextErrors = validateRegisterForm(values);
      setErrors(nextErrors);
      if (hasRegisterErrors(nextErrors)) {
        return undefined;
      }
      return completeRegistration(values);
    },
    [completeRegistration, values],
  );

  return { values, errors, isSubmitting, handleFieldChange, handleSubmit };
};
