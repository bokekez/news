export const MESSAGES = {
  USER: {
    REGISTER_SUCCESS: 'User registered successfully. Please verify your email.',
    LOGIN_SUCCESS: 'Login successful.',
    USER_NOT_FOUND: 'User not found.',
    USER_ALREADY_EXISTS: 'User already exists.',
    EMAIL_ALREADY_EXISTS: 'Email already exists',
    INVALID_CREDENTIALS: 'Invalid username or password.',
    INVALID_PASSWORD: 'Invalid password',
    NOT_VERIFIED: 'User not verified.'
  },
  EMAIL: {
    VERIFICATION_SENT: 'Verification email sent successfully.',
    EMAIL_VERIFIED: 'Email verified successfully.',
    EMAIL_VERIFICATION_FAILED: 'Email verification failed.',
    EMAIL_SEND_ERROR: 'User registered but failed to send verification email'
  },
  FAVORITE: {
    NOT_FOUND: 'Favorite not found',
    ALREADY_EXISTS: 'Article is already a favorite'
  },
  TOKEN: {
    REQUIRED: 'Token is required'
  },
  GENERAL: {
    MISSING_PARAMETERS: 'Required parameters are missing.',
    SERVER_ERROR: 'An unexpected error occurred.',
    FAILED_TO_FETCH: 'Failed to fetch resource reason:'
  },
  OPERATIONS: {
    UPDATE: 'Update succesful',
    DELETE: 'Delete successful'
  }
};