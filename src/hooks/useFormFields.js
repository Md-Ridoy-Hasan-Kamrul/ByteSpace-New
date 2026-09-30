import { useCallback, useState } from 'react';

// Controlled field values plus per-field errors. Editing a field clears its own error and any
// form-level error.
export const useFormFields = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleFieldChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '', form: '' }));
  }, []);

  return { values, errors, setErrors, handleFieldChange };
};
