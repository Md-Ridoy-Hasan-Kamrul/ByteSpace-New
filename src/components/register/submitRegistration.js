import { httpMethods } from '../../services/httpMethods';
import { API_ENDPOINTS } from '../../services/httpEndpoint';
import { REGISTER_FAILED } from './registerCopy';

const DEV_MOCK_AUTH_ENABLED = 'true';

const readFailureMessage = (error) =>
  error?.response?.data?.message ?? error?.data?.message ?? error?.message ?? REGISTER_FAILED;

const toRegistrationPayload = ({ fullName, email, password }) => ({
  name: fullName.trim(),
  email: email.trim(),
  password,
});

export const submitRegistration = async (account) => {
  if (process.env.REACT_APP_DEV_MOCK_AUTH === DEV_MOCK_AUTH_ENABLED) {
    return { ok: true };
  }

  const { error } = await httpMethods.post(
    API_ENDPOINTS.AUTH.REGISTER,
    toRegistrationPayload(account),
  );

  if (error) {
    return { ok: false, message: readFailureMessage(error) };
  }

  return { ok: true };
};
