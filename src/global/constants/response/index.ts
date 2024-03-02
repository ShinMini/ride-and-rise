import { common } from './common';
import { ERROR_DETAIL } from './error-detail';
import { HINT_MESSAGE } from './hint-message';
import { MESSAGE } from './message';

export const res = {
  common,
  message: MESSAGE,
  detail: ERROR_DETAIL,
  hint: HINT_MESSAGE,
} as const;
