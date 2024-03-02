export const MESSAGE = {
  // for firebase
  BROADCAST_SUCCESS: 'BROADCAST_SUCCESS',
  BROADCAST_FAIL: 'BROADCAST_FAIL',
  DEVICE_REGISTER_SUCCESS: 'DEVICE_REGISTER_SUCCESS',
  DEVICE_DELETE_SUCCESS: 'DEVICE_DELETE_SUCCESS',
  DEVICE_REGISTER_FAIL: 'DEVICE_REGISTER_FAIL',
  DEVICE_DELETE_FAIL: 'DEVICE_DELETE_FAIL',

  // COMMON MESSAGE
  FORBIDDEN: 'FORBIDDEN',
  INVALID_INPUT: 'INVALID_INPUT',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
  PRISMA_ERROR: 'PRISMA_ERROR',
  INVALID_PAYLOAD: 'INVALID_PAYLOAD',

  // SUCCESS MESSAGE
  SUCCESS: 'SUCCESS',
  REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS',
  VALIDATE_SUCCESS: 'VALIDATE_SUCCESS',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  PROFILE_UPDATE_REQUEST_CREATED: 'PROFILE_UPDATE_REQUEST_CREATED',
  PROFILE_UPDATE_REQUEST_UPDATED: 'PROFILE_UPDATE_REQUEST_UPDATED',

  // 인증 (1. 패스 인증)
  VERIFY_SUCCESS: 'VERIFY_SUCCESS',
  VERIFY_FAILED: 'VERIFY_FAILED',

  CREATED_SUCCESS: 'CREATED_SUCCESS',
  READ_SUCCESS: 'READ_SUCCESS',
  UPDATED_SUCCESS: 'UPDATED_SUCCESS',
  DELETED_SUCCESS: 'DELETED_SUCCESS',
  REFRESH_SUCCESS: 'REFRESH_SUCCESS',

  // PASS AUTHENTICATION MESSAGE
  PASS_AUTHENTICATION_SUCCESS: 'PASS_AUTHENTICATION_SUCCESS',
  PASS_AUTHENTICATION_FAILED: 'PASS_AUTHENTICATION_FAILED',
  PASS_AUTHENTICATION_ERROR: 'PASS_AUTHENTICATION_ERROR',

  // FAIL MESSAGE
  FAIL: 'FAIL',
  VALIDATE_FAIL: 'VALIDATE_FAIL',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT_FAIL: 'LOGOUT_FAIL',
  SIGNUP_FAIL: 'SIGNUP_FAIL',
  INVALID_TOKEN: 'INVALID_TOKEN',
  PROFILE_UPDATE_REQUEST_CREATE_FAILED: 'PROFILE_UPDATE_REQUEST_CREATE_FAILED',
  PROFILE_UPDATE_REQUEST_UPDATE_FAILED: 'PROFILE_UPDATE_REQUEST_UPDATE_FAILED',

  CREATE_FAIL: 'CREATE_FAIL',
  READ_FAIL: 'READ_FAIL',
  UPDATE_FAIL: 'UPDATE_FAIL',
  DELETE_FAIL: 'DELETE_FAIL',

  NEED_TO_SIGNUP: 'NEED_TO_SIGNUP',
  TERMS_AGREEMENT_REQUIRED: 'TERMS_AGREEMENT_REQUIRED',

  // LOGIN OR SIGNUP MESSAGE
  SUCCESS_TO_LOGIN: 'SUCCESS_TO_LOGIN',
  SUCCESS_TO_FIND: 'SUCCESS_TO_FIND',
  WRONG_PASSWORD: 'WRONG_PASSWORD',
  FAIL_TO_LOGIN: 'FAIL_TO_LOGIN',
  ALREADY_EXIST: 'ALREADY_EXIST',
  SUCCESS_TO_SIGNUP: 'SUCCESS_TO_SIGNUP',
  NEED_TO_AGREE_TERMS: 'NEED_TO_AGREE_TERMS',
  NOT_ENOUGH_PROFILE: 'NOT_ENOUGH_PROFILE',
  NEED_TO_SET_NICKNAME: 'NEED_TO_SET_NICKNAME',

  // USER MESSAGE
  SUCCESS_TO_GET_USER_LIST: 'SUCCESS_TO_GET_USER_LIST',
  FAILED_TO_GET_USER_LIST: 'FAILED_TO_GET_USER_LIST',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
} as const;
