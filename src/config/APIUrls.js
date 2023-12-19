//  import { APP_BASE_URL } from "../constants";

export const getAppApiUrl = (endpoint) => "http://localhost:8091/minima" + endpoint;

// Auth API
export const LOGIN_API = getAppApiUrl('/api/auth/login');
export const Developer_Registration_API = getAppApiUrl('/api/auth/developer-registration');
export const LOGOUT_API = getAppApiUrl('/api/auth/logout');
// User API
export const CURRENTUSER_API = getAppApiUrl('/api/user/current-user');
