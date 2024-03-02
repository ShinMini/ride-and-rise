export const CardGrade = {
  BLACK: 'BLACK',
  RED: 'RED',
  GOLD: 'GOLD',
  BLUE: 'BLUE',
  PURPLE: 'PURPLE',
} as const;

export const MatchingStatus = {
  CREATED: 'CREATED',
  MATCHED: 'MATCHED',
  REQUESTED: 'REQUESTED',
  W_REJECTED: 'W_REJECTED',
  PENDING: 'PENDING',
  M_REJECTED: 'M_REJECTED',
  REMOVED: 'REMOVED',
  TIME_OUT: 'TIME_OUT',
} as const;
